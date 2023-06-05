import styled from 'styled-components';

export const CardListItem = styled.li`
  list-style: none;
`;
export const CardListContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto;
  width: 1200px;
  justify-content: space-between;
  gap: 20px;
  margin-top: 50px;
`;
export const NextButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 14px 28px;
  gap: 6px;
  background: #ebd8ff;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10.3108px;

  align-self: center;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;

  text-transform: uppercase;
  color: #373737;
  cursor: pointer;
`;
export const SelectContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 30px;
  margin-top: 50px;
`;
