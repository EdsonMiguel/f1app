
import React, { useEffect } from 'react';

import Wheel from '../../../assets/wheel2.svg'
// import all the components we are going to use
import {
  SafeAreaView,
  StyleSheet,
  View,
  Animated,
  Easing,
  TouchableHighlight,
  Text,
} from 'react-native';

export function Loading() {
  let rotateValueHolder = new Animated.Value(0);

  function startImageRotateFunction(){
    rotateValueHolder.setValue(0);
    Animated.timing(rotateValueHolder, {
      toValue: 1,
      easing: Easing.linear,
      useNativeDriver: false,
    }).start(() => startImageRotateFunction());
  };

  const RotateData = rotateValueHolder.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '720deg'],
  });

  useEffect(()=>{
    startImageRotateFunction()
  },[])

  return (
    <View>
      <Animated.View
        style={{
          width: 100,
          height: 100 ,
          transform: [{ rotate: RotateData }],
        }}
      >
        <Wheel />
      </Animated.View>
    </View>
  );
};

