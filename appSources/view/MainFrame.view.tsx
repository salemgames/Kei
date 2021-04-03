import React, {useState} from 'react';
import MainBackGroundImage from '../components/ImagesComponents/MainBackGroundImage.component';
import {Container} from './MainFrame.style';
import ControlTable from '../components/DevicesControlTable/DevicesControlTable.component';
import {Image, StyleSheet} from 'react-native';
import Eyes from '../components/eyes/Eyes.component';

const MainFrame: React.FC = () => {
  const [moveEyes, setMoveEyes] = useState<boolean>(false);

  const styles = StyleSheet.create({
    portrait: {
      resizeMode: 'cover',
      position: 'absolute',
      width: '100%',
      height: '100%',
      zIndex: 1,
    },
  });

  const moveEyesFunc = () => {
    setMoveEyes((moveEyes) => !moveEyes);
    console.log("moveEyes", moveEyes)
  };

  return (
    <>
      <Container>
        <Eyes moveEyes={moveEyes} />
        <Image
          source={require('../../assets/portrait.png')}
          style={styles.portrait}
        />

        <MainBackGroundImage />
        <ControlTable onClick={() => moveEyesFunc()} />
      </Container>
    </>
  );
};

export default MainFrame;
