import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const ButtonStyled = styled(NavLink)`
  display: block;
  width: 150px;
  font-family: 'Montserrat';
  font-size: 24px;
  text-align: center;
  padding: 7px 20px;
  text-decoration: none;
  font-weight: 500;
  background-color: #4b2a99;
  color: white;
  border-radius: 7px;
  margin-left: 50px;
  margin-top: 50px;

  &.hover,
  &.focus {
    background-color: #2b2a99;
    color: white;
  }
`;
