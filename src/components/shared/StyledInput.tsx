import { StyleSheet, TextInput } from 'react-native';
import styleConstants from '../../libs/constants/styleConstants';

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
    padding: styleConstants.magicUnit * 2,
    backgroundColor: styleConstants.white,
    borderRadius: styleConstants.magicUnit * 2,
    fontSize: 24,
  },
});
