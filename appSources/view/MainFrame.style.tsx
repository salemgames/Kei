import styled from 'styled-components/native';
export const Container = styled.View`
  display: flex;
  flex-direction: row;
  background-color: #ffffff;
  width: 100%;
  align-items: flex-end;
  height: 100%;

`;

export const LightBulbButton = styled.TouchableOpacity`
  width: 50px;
  height: 50px;
  border-radius: 4px;
  background-color: lightblue;
  padding: 10px;
  margin: 10px;
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.8);
`;
