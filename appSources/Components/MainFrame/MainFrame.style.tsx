import styled from 'styled-components/native';
export const Container = styled.View`
  display: flex;
  background-color: #000000;
  width: 100%;
  align-items: flex-end;
  height: 100%;
  padding: 10px;
`;

export const LightBulbButton = styled.TouchableOpacity`
  width: 100px;
  height: 100px;
  border-radius: 4px;
  background-color: lightblue;
  padding: 10px;
  margin: 10px;
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.8);
`;
