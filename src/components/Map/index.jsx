/* eslint-disable react/prop-types */
import React, { useState, useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GoogleApiWrapper, Map, Marker } from 'google-maps-react';
import styled from 'styled-components';

import { setRestaurants, setRestaurant } from '../../redux/modules/restaurants';
import {
  MOCK_RESTAURANTS,
  filterMockRestaurants,
  findMockRestaurantById,
} from '../../mocks/restaurantsMock';

const FallbackContainer = styled.div`
  flex: 1;
  height: calc(100vh - 56px);
  background: linear-gradient(135deg, #eef2f7 0%, #dbe4f0 100%);
  display: flex;
  flex-direction: column;
  padding: 24px;
  box-sizing: border-box;
  overflow-y: auto;
  font-family: ${({ theme }) => theme.fonts.fontFamily};
`;

const FallbackHeader = styled.div`
  background-color: #ffffff;
  border-radius: 12px;
  padding: 16px 20px;
  margin-bottom: 20px;
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.06);
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 12px;
`;

const Badge = styled.span`
  background-color: #6200ee;
  color: #ffffff;
  font-size: 12px;
  font-weight: 600;
  padding: 6px 12px;
  border-radius: 999px;
`;

const PinsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 16px;
`;

const PinCard = styled.div`
  background-color: #ffffff;
  border-radius: 10px;
  padding: 16px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  border-left: 4px solid #6200ee;
  cursor: pointer;
  transition: transform 0.15s ease, box-shadow 0.15s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 16px rgba(98, 0, 238, 0.14);
  }
`;

const PinTitle = styled.h4`
  margin: 0 0 6px 0;
  color: #1f2937;
  font-size: 16px;
  font-weight: 700;
`;

const PinMeta = styled.p`
  margin: 4px 0;
  color: #4b5563;
  font-size: 13px;
  line-height: 1.4;
`;

const hasValidGoogleKey = () => {
  const key = process.env.REACT_APP_GOOGLE_API_KEY;
  return Boolean(key && key.trim() !== '' && key !== 'SUA_CHAVE_GOOGLE_MAPS_AQUI');
};

export const MapContainer = (props) => {
  const dispatch = useDispatch();
  const [map, setMap] = useState(null);
  const [useFallback, setUseFallback] = useState(!hasValidGoogleKey());
  const { restaurants } = useSelector((state) => state.restaurants);
  const { google, query, placeId, onSelectRestaurant } = props;

  useEffect(() => {
    if (restaurants.length === 0) {
      dispatch(setRestaurants(MOCK_RESTAURANTS));
    }
  }, [dispatch, restaurants.length]);

  const searchByQuery = useCallback(
    (currentMap, searchQuery) => {
      if (!currentMap || !google || !google.maps || !google.maps.places || useFallback) {
        const filtered = filterMockRestaurants(searchQuery);
        dispatch(setRestaurants(filtered.length > 0 ? filtered : MOCK_RESTAURANTS));
        return;
      }

      const service = new google.maps.places.PlacesService(currentMap);
      dispatch(setRestaurants([]));

      const request = {
        location: currentMap.center,
        radius: '200',
        type: ['restaurant'],
        query: searchQuery,
      };

      service.textSearch(request, (results, status) => {
        if (status === google.maps.places.PlacesServiceStatus.OK && results?.length > 0) {
          dispatch(setRestaurants(results));
        } else {
          const filtered = filterMockRestaurants(searchQuery);
          dispatch(setRestaurants(filtered.length > 0 ? filtered : MOCK_RESTAURANTS));
        }
      });
    },
    [dispatch, google, useFallback]
  );

  const getDetails = useCallback(
    (selectedPlaceId) => {
      if (
        !map ||
        !google ||
        !google.maps ||
        !google.maps.places ||
        useFallback ||
        String(selectedPlaceId).startsWith('mock-')
      ) {
        dispatch(setRestaurant(findMockRestaurantById(selectedPlaceId)));
        return;
      }

      const service = new google.maps.places.PlacesService(map);
      dispatch(setRestaurant(null));

      const request = {
        placeId: selectedPlaceId,
        fields: ['name', 'opening_hours', 'formatted_address', 'formatted_phone_number'],
      };

      service.getDetails(request, (place, status) => {
        if (status === google.maps.places.PlacesServiceStatus.OK && place) {
          dispatch(setRestaurant(place));
        } else {
          dispatch(setRestaurant(findMockRestaurantById(selectedPlaceId)));
        }
      });
    },
    [google, map, dispatch, useFallback]
  );

  useEffect(() => {
    if (query !== undefined) {
      searchByQuery(map, query);
    }
  }, [searchByQuery, query, map]);

  useEffect(() => {
    if (placeId) {
      getDetails(placeId);
    }
  }, [placeId, getDetails]);

  const searchNearby = (currentMap, center) => {
    if (!currentMap || !google || !google.maps || !google.maps.places) {
      setUseFallback(true);
      dispatch(setRestaurants(MOCK_RESTAURANTS));
      return;
    }

    const service = new google.maps.places.PlacesService(currentMap);

    const request = {
      location: center,
      radius: '20000',
      type: ['restaurant'],
    };

    service.nearbySearch(request, (results, status) => {
      if (status === google.maps.places.PlacesServiceStatus.OK && results?.length > 0) {
        dispatch(setRestaurants(results));
      } else {
        setUseFallback(true);
        dispatch(setRestaurants(MOCK_RESTAURANTS));
      }
    });
  };

  function onMapReady(_, currentMap) {
    setMap(currentMap);
    searchNearby(currentMap, currentMap.center);
  }

  if (useFallback || !google) {
    return (
      <FallbackContainer>
        <FallbackHeader>
          <div>
            <h3 style={{ margin: '0 0 4px 0', color: '#111827', fontSize: '18px' }}>
              Mapa Interativo de Restaurantes (São Paulo - SP)
            </h3>
            <p style={{ margin: 0, color: '#6b7280', fontSize: '13px' }}>
              Clique em qualquer marcador abaixo ou na barra lateral para inspecionar detalhes,
              endereço, telefone e horário de funcionamento.
            </p>
          </div>
          <Badge>Modo Demonstração Ativo ({restaurants.length} locais)</Badge>
        </FallbackHeader>
        <PinsGrid>
          {restaurants.map((restaurant) => (
            <PinCard
              key={restaurant.place_id}
              onClick={() => {
                dispatch(setRestaurant(findMockRestaurantById(restaurant.place_id)));
                if (onSelectRestaurant) {
                  onSelectRestaurant(restaurant.place_id);
                }
              }}>
              <PinTitle>📍 {restaurant.name}</PinTitle>
              {restaurant.category && (
                <PinMeta style={{ color: '#6200ee', fontWeight: 600 }}>
                  {restaurant.category}
                </PinMeta>
              )}
              <PinMeta>{restaurant.formatted_address || restaurant.vicinity}</PinMeta>
              <PinMeta>
                ⭐ <strong>{restaurant.rating}</strong> •{' '}
                {restaurant.opening_hours?.open_now ? '🟢 Aberto agora' : '🔴 Fechado'}
              </PinMeta>
              <PinMeta style={{ fontSize: '12px', color: '#9ca3af' }}>
                Lat: {restaurant.geometry.location.lat()} | Lng:{' '}
                {restaurant.geometry.location.lng()}
              </PinMeta>
            </PinCard>
          ))}
        </PinsGrid>
      </FallbackContainer>
    );
  }

  return (
    <Map
      google={google}
      centerAroundCurrentLocation
      onReady={onMapReady}
      onRecenter={onMapReady}
      zoom={15}
      {...props}>
      {restaurants.map((restaurant) => (
        <Marker
          key={restaurant.place_id}
          name={restaurant.name}
          position={{
            lat: restaurant.geometry.location.lat(),
            lng: restaurant.geometry.location.lng(),
          }}
        />
      ))}
    </Map>
  );
};

const WrappedMap = GoogleApiWrapper({
  apiKey: process.env.REACT_APP_GOOGLE_API_KEY || '',
  language: 'pt-BR',
})(MapContainer);

export default (props) => {
  if (!hasValidGoogleKey()) {
    return <MapContainer {...props} google={null} />;
  }
  return <WrappedMap {...props} />;
};
