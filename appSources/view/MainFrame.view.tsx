import React from 'react';
import MainBackGroundImage from '../components/ImagesComponents/MainBackGroundImage.component';
import {Container} from './MainFrame.style';
import ControlTable from '../components/DevicesControlTable/DevicesControlTable.component';
import {ImageBackground, Image, StyleSheet} from 'react-native';
import Eyes from '../components/eyes/Eyes.component';
const MainFrame: React.FC = () => {
  const styles = StyleSheet.create({
    portrait: {
      resizeMode: 'cover',
      position: 'absolute',
      width: '100%',
      height: '100%',
      zIndex: 1,
    },
  });

  return (
    <>
      <Container>
        <Eyes moveEyes={false} />
        <Image
          source={require('../../assets/portrait.png')}
          style={styles.portrait}
        />

        <MainBackGroundImage />
        <ControlTable />
      </Container>
    </>
  );
};

export default MainFrame;
