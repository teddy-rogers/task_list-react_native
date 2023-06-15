import { StyleSheet, TextInput } from 'react-native';

export default function Input({value, onChange, placeholder}: Props) {
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
    borderColor: 'dimgrey',
    borderWidth: 1,
    borderRadius: 4,
  },
});
