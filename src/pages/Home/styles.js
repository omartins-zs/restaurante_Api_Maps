import styled from 'styled-components';
import Slider from 'react-slick';

import { Text } from '../../components';

export const PageLayout = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow: hidden;
  font-family: ${({ theme }) => theme.fonts.fontFamily};
`;

export const TopSessionBar = styled.header`
  height: 56px;
  background-color: #1f1147;
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  z-index: 10;
`;

export const SessionUserInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 13px;
`;

export const RolePill = styled.span`
  background-color: ${({ color }) => color || '#6200ee'};
  color: #ffffff;
  font-size: 11px;
  font-weight: 700;
  padding: 4px 10px;
  border-radius: 999px;
`;

export const LogoutButton = styled.button`
  background-color: rgba(255, 255, 255, 0.12);
  color: #ffffff;
  border: 1px solid rgba(255, 255, 255, 0.25);
  border-radius: 6px;
  padding: 6px 12px;
  font-size: 12px;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: rgba(239, 68, 68, 0.85);
    border-color: transparent;
  }
`;

export const Container = styled.aside`
  background-color: ${({ theme: { colors } }) => colors.background};
  width: 360px;
  height: calc(100vh - 56px);
  overflow-y: scroll;
`;

export const Search = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #ffffff;
  padding: 16px;
`;

export const Logo = styled.img`
  margin: 15px;
`;

export const Title = styled(Text)`
  margin: 16px 0;
`;

export const Carousel = styled(Slider)`
  .slick-slide {
    margin-right: 16px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex: 1;
  height: calc(100vh - 56px);
`;
