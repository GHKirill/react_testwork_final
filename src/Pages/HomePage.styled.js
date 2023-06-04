import styled from 'styled-components';

import { NavLink } from 'react-router-dom';
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  width: 400px;
  margin: 0 auto;
  padding-top: 150px;
`;
export const Text = styled.div`
  font-family: 'Montserrat';
  font-size: 30px;
  text-align: center;
  font-weight: 700;
`;
export const ButtonStyled = styled(NavLink)`
  font-family: 'Montserrat';
  font-size: 24px;
  text-align: center;
  padding: 7px 20px;
  text-decoration: none;
  font-weight: 500;
  background-color: #4b2a99;
  color: white;
  border-radius: 7px;

  &.hover,
  &.focus {
    background-color: #2b2a99;
    color: white;
  }
`;
