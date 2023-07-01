import { StyleSheet, TextInput } from 'react-native';

export default function StyledInput({value, onChange, placeholder}: Props) {
  return (
    <TextInput
      style={styles.input}
      onChangeText={onChange}
      value={value}
      placeholder={placeholder}
    />
  );
}

type Props = {
  value: string;
  onChange: (text: string) => void;
  placeholder: string;
};

const styles = StyleSheet.create({
  input: {
    width: '70%',
    height: '80%',
    padding: 8,
    backgroundColor: 'white',
    borderColor: 'silver',
    borderWidth: 1,
    borderRadius: 4,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.5,
  },
});
