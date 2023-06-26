import React, { PropsWithChildren, useEffect, useRef } from 'react';
import { Animated } from 'react-native';

export default function FloatingView({
  duration = 200,
  children,
}: PropsWithChildren<Props>) {
  const fadeAnimation = useRef(new Animated.Value(0.4)).current;

  useEffect(() => {
    Animated.timing(fadeAnimation, {
      toValue: 1,
      useNativeDriver: true,
      duration,
    }).start();
  }, [fadeAnimation]);

  return (
    <Animated.View style={{opacity: fadeAnimation}}>{children}</Animated.View>
  );
}

type Props = {
  duration?: number;
};
