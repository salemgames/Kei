import React, {useEffect, useRef, useState} from 'react';
import {StyleSheet} from 'react-native';
import {Animated} from 'react-native';

interface Props {
  moveEyes: boolean;
}

const Eyes: React.FC<Props> = ({moveEyes}: Props) => {
  const [destination, setDestination] = useState<number>(0);

  const translation = useRef(new Animated.Value(0)).current;
  const animatedValue = useRef(new Animated.Value(0)).current;
  const translateX = animatedValue.interpolate({
    inputRange: [0, 1, 2],
    outputRange: [0, 50, -50],
  });

  const shakeButton = () => {
    Animated.sequence([
      Animated.timing(animatedValue, {
        toValue: 2,
        duration: 1000,
        useNativeDriver: false,
      }),
      Animated.timing(animatedValue, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: false,
      }),
    ]).start(shakeButton);
  };

  React.useEffect(() => {
    Animated.timing(animatedValue, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: false,
    }).start(shakeButton);
  }, [animatedValue]);

  useEffect(() => {
    if (moveEyes) setDestination(0);
    if (moveEyes === false) setDestination(50);
  }, [moveEyes]);

  const styles = StyleSheet.create({
    portrait: {
      resizeMode: 'cover',
      position: 'absolute',
      width: '100%',
      height: '100%',
    },
  });

  return (
    <Animated.View
      style={[
        styles.portrait,
        {
          transform: [{translateX}],
        },
      ]}>
      <Animated.Image
        blurRadius={1}
        source={require('../../../assets/eyesLayer.png')}
        style={styles.portrait}
      />
    </Animated.View>
  );
};

export default Eyes;
