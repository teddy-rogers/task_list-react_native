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
    padding: 16,
    backgroundColor: 'white',
    borderRadius: 16,
    fontSize: 24,
  },
});
