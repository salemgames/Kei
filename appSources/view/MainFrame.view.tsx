import React from 'react';
import MainBackGroundImage from '../components/ImagesComponents/MainBackGroundImage.component';
import {Container} from './MainFrame.style';
import ControlTable from '../components/DevicesControlTable/DevicesControlTable.component';

const MainFrame: React.FC = () => {
  return (
    <>
      <Container>
        <ControlTable />
        <MainBackGroundImage />
      </Container>
    </>
  );
};

export default MainFrame;
