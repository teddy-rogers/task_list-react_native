import React, { PropsWithChildren, useEffect, useRef } from 'react';
import { Animated } from 'react-native';

export default function FloatingView({children}: PropsWithChildren) {
  const fadeAnimation = useRef(new Animated.Value(0.4)).current;

  useEffect(() => {
    Animated.timing(fadeAnimation, {
      toValue: 1,
      duration: 200,
      useNativeDriver: true,
    }).start();
  }, [fadeAnimation]);

  return (
    <Animated.View style={{opacity: fadeAnimation}}>{children}</Animated.View>
  );
}
