import React, {useState, useEffect, useRef} from 'react';
import {Animated, View} from 'react-native';
import {SvgXml} from 'react-native-svg';

const MainBackGroundImage = () => {
  const [opacityValue, setOpacityValue] = useState<number>(0.4);
  const [incrementBool, setIncrementBool] = useState<boolean>(true);

  const xml = `<?xml version="1.0" encoding="UTF-8" standalone="no"?>
  <svg width="100%"  preserveAspectRatio="YMax slice"  version="1.1" viewBox="0 0 158.75 215.37"  xmlns="http://www.w3.org/2000/svg" xmlns:cc="http://creativecommons.org/ns#" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#">
  <g  fill="#000" >
   <path transform="scale(.26458)" d="m1.8379-2.9844v818.42h264.17c-18.379-19.704-136.31-158.05-95.895-175.34 21.904 0.45018 57.041 69.148 145.45 72.197 50.286-4.0121 86.493-35.756 105.06-70.213-40.852 24.475-74.741 44.501-124.74 43.787-23.17-3.863-58.756-24.268-58.756-24.268-108.52-53.973-165.47-270.44-159.79-307.89 8.6039-28.535 53.307 4.9397 99.187 20.264 34.323 8.4784 61.19-6.0834 89.039-23.322 18.34-11.353 55.806-19.578 88.555 4.3164 31.591 15.348 57.407 22.057 95.865 15.098 1.4673-0.52054 2.9501-1.1062 4.4414-1.7246-1.5032 0.32308-3.0413 0.62795-4.6602 0.89258-24.911-1.0398-43.863-1.056-67.631-14.227-21.003-11.603 17.155-57.608 62.117-55.67 17.4 3.4923 35.503 0.081 48.271 24.986 0.61515 8.4826-0.76484 19.95-9.4316 29.379 19.385-10.468 38.536-19.46 53.533-10.023 28.469 10.702 11.441 45.415 4.0391 81.381l-65.859 168.82c5.7935 103.9-28.013 150.92-97.658 221.55h232.73v-818.42zm184.83 301.3c32.74 0.45852 57.543 41.088 57.543 41.088 1.1988 6.8505 1.652 13.941-7.584 17.186-21.857 8.3154-28.905 11.627-58.178 11.238-38.915-6.3613-47.771-29.304-46.701-44.057 12.769-24.905 48.271-24.986 48.271-24.986 2.2482-0.35045 4.4658-0.49932 6.6484-0.46875z" stroke-width=".99501px"/>
   <path transform="scale(.26458)" d="m285.17 567.64c-16.459 11.585-45.887 27.396-45.887 27.396 0.94196 16.299 11.258 24.569 30.947 37.611 22.594 6.3825 58.753 7.3121 74.78 1.6979 14.847-5.8515 30.906-14.052 35.996-34.164 0 0-28.57-23.402-49.51-29.463-11.463 4.3627-33.774 3.9131-46.326-3.0781zm63.842 36.916c6.9522 0.0664 12.564 0.88597 13.762 2.5977 4.9606 3.9003 2.3554 10.814-5.1094 15.234-7.392 5.4041-22.186 8.6621-22.186 8.6621s3.335-5.7413 1-13.531c-5.4396-6.6147-11.79-6.0641-19.184-7.6856 4.8177-3.41 20.13-5.3879 31.717-5.2773z" filter="url(#filter1118)" stroke-width="1px"/>
  </g>
 </svg>
 

  `;

  const translation = useRef(new Animated.Value(0)).current;
  const animatedValue = useRef(new Animated.Value(0)).current;
  const opacity = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 1],
  });

  const shakeButton = () => {
    Animated.sequence([
      Animated.timing(animatedValue, {
        toValue: 0,
        duration: 800,
        useNativeDriver: false,
      }),
      Animated.timing(animatedValue, {
        toValue: 0.6,
        duration: 800,
        useNativeDriver: false,
      }),
    ]).start(shakeButton);
  };
  React.useEffect(() => {
    Animated.timing(animatedValue, {
      toValue: 0.6,
      duration: 2000,
      useNativeDriver: false,
    }).start(shakeButton);
  }, [animatedValue]);

  return (
    <Animated.View
      style={{
        position: 'absolute',
        width: '100%',
        height: '100%',
        opacity: opacity,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        aspectRatio: 1,
        zIndex: 45,
      }}>
      <SvgXml
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',

          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          aspectRatio: 1,
          zIndex: 45,
        }}
        xml={xml}
      />
    </Animated.View>
  );
};

export default MainBackGroundImage;
