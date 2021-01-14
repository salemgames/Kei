import styled from 'styled-components/native';
export const Container = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  background-color: #000000;
  width: 100%;
  align-items: flex-end;
  height: 100%;
  padding: 10px;
`;

interface StandardControlButtonProps {
  deviceType: 'stepperMotor' | 'servoMotor' | 'light';
}

export const StandardControlButton = styled.TouchableOpacity<StandardControlButtonProps>`
  width: 50px;
  height: 50px;
  border-radius: 4px;
  background-color: ${props => props.deviceType === "light" ? "cyan" : props.deviceType === "stepperMotor" ? "red" : props.deviceType === "servoMotor" ? "green" : null};
  padding: 10px;
  margin: 10px;
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.8);
`;
