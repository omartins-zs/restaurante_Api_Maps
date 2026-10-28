import restauranteFake from '../assets/restaurante-fake.png';

export const DEMO_USERS = [
  {
    id: 1,
    name: 'Admin Sistema',
    email: 'admin@restaurantes.com',
    password: 'Password@123',
    role: 'Administrador',
    badgeColor: '#6200ee',
  },
  {
    id: 2,
    name: 'Gestor Gastronômico',
    email: 'gestor@restaurantes.com',
    password: 'Password@123',
    role: 'Gestor de Parceiros',
    badgeColor: '#00897b',
  },
  {
    id: 3,
    name: 'Cliente Visitante',
    email: 'cliente@restaurantes.com',
    password: 'Password@123',
    role: 'Cliente',
    badgeColor: '#e65100',
  },
];

export const MOCK_RESTAURANTS = [
  {
    place_id: 'mock-rest-1',
    name: 'Trattoria Bella Napoli',
    rating: 4.8,
    formatted_address: 'Av. Paulista, 1450 - Bela Vista, São Paulo - SP',
    vicinity: 'Av. Paulista, 1450 - Bela Vista',
    formatted_phone_number: '(11) 3251-8900',
    category: 'Italiana • Massas Artesanais',
    opening_hours: { open_now: true },
    icon: restauranteFake,
    photos: [{ getUrl: () => restauranteFake }],
    geometry: {
      location: {
        lat: () => -23.5629,
        lng: () => -46.6544,
      },
    },
  },
  {
    place_id: 'mock-rest-2',
    name: 'Sushi Leblon Imperial',
    rating: 4.9,
    formatted_address: 'Rua Oscar Freire, 820 - Jardins, São Paulo - SP',
    vicinity: 'Rua Oscar Freire, 820 - Jardins',
    formatted_phone_number: '(11) 3082-4410',
    category: 'Japonesa • Omakase & Sashimi',
    opening_hours: { open_now: true },
    icon: restauranteFake,
    photos: [{ getUrl: () => restauranteFake }],
    geometry: {
      location: {
        lat: () => -23.5614,
        lng: () => -46.6692,
      },
    },
  },
  {
    place_id: 'mock-rest-3',
    name: 'Parrilla Don Julio Brasil',
    rating: 4.7,
    formatted_address: 'Rua dos Pinheiros, 498 - Pinheiros, São Paulo - SP',
    vicinity: 'Rua dos Pinheiros, 498 - Pinheiros',
    formatted_phone_number: '(11) 3064-7721',
    category: 'Steakhouse • Cortes Nobres',
    opening_hours: { open_now: true },
    icon: restauranteFake,
    photos: [{ getUrl: () => restauranteFake }],
    geometry: {
      location: {
        lat: () => -23.5661,
        lng: () => -46.6815,
      },
    },
  },
  {
    place_id: 'mock-rest-4',
    name: 'Bistrô Le Jardin Parisien',
    rating: 4.6,
    formatted_address: 'Alameda Lorena, 1920 - Jardim Paulista, São Paulo - SP',
    vicinity: 'Alameda Lorena, 1920 - Jardim Paulista',
    formatted_phone_number: '(11) 3061-9123',
    category: 'Francesa • Alta Gastronomia',
    opening_hours: { open_now: false },
    icon: restauranteFake,
    photos: [{ getUrl: () => restauranteFake }],
    geometry: {
      location: {
        lat: () => -23.5652,
        lng: () => -46.6658,
      },
    },
  },
  {
    place_id: 'mock-rest-5',
    name: 'Burger Lab Craft Kitchen',
    rating: 4.5,
    formatted_address: 'Rua Augusta, 2110 - Cerqueira César, São Paulo - SP',
    vicinity: 'Rua Augusta, 2110 - Cerqueira César',
    formatted_phone_number: '(11) 3159-2030',
    category: 'Hamburgueria • Smash & Chopp',
    opening_hours: { open_now: true },
    icon: restauranteFake,
    photos: [{ getUrl: () => restauranteFake }],
    geometry: {
      location: {
        lat: () => -23.5588,
        lng: () => -46.6601,
      },
    },
  },
  {
    place_id: 'mock-rest-6',
    name: 'Boteco Boa Praça Vila Madalena',
    rating: 4.4,
    formatted_address: 'Rua Aspicuelta, 540 - Vila Madalena, São Paulo - SP',
    vicinity: 'Rua Aspicuelta, 540 - Vila Madalena',
    formatted_phone_number: '(11) 3815-6600',
    category: 'Brasileira • Petiscos & Feijoada',
    opening_hours: { open_now: true },
    icon: restauranteFake,
    photos: [{ getUrl: () => restauranteFake }],
    geometry: {
      location: {
        lat: () => -23.5562,
        lng: () => -46.6894,
      },
    },
  },
];

export function filterMockRestaurants(query = '') {
  const normalized = query.trim().toLowerCase();
  if (!normalized) {
    return MOCK_RESTAURANTS;
  }
  return MOCK_RESTAURANTS.filter(
    (item) =>
      item.name.toLowerCase().includes(normalized) ||
      item.formatted_address.toLowerCase().includes(normalized) ||
      (item.category && item.category.toLowerCase().includes(normalized))
  );
}

export function findMockRestaurantById(placeId) {
  return MOCK_RESTAURANTS.find((item) => item.place_id === placeId) || MOCK_RESTAURANTS[0];
}
