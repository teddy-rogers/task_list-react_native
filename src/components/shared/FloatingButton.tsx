import { useEffect, useState } from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';

export default function FloatingButton({onPress, isToggled = false}: Props) {
  const [toggled, setToggled] = useState<Boolean>(false);

  function handlePress() {
    onPress();
    setToggled(prevState => !prevState);
  }

  useEffect(() => {
    setToggled(isToggled);
  }, [isToggled]);

  return (
    <Pressable
      onPress={handlePress}
      style={[
        styles.btn,
        {transform: toggled ? 'rotate(45deg)' : 'rotate(0deg)'},
      ]}>
      <Text style={styles.cross}>+</Text>
    </Pressable>
  );
}

type Props = {
  onPress: () => void;
  isToggled?: Boolean;
};

const styles = StyleSheet.create({
  btn: {
    position: 'absolute',
    right: 16,
    bottom: 24,
    width: 56,
    height: 56,
    backgroundColor: '#f00b42',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4,

    elevation: 3,
  },
  cross: {
    fontSize: 48,
    lineHeight: 56,
    color: 'white',
    textAlign: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
});
