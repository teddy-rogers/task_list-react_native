import { StyleProp, TextInput } from 'react-native';

export default function SimpledInput({
  value,
  onChange,
  placeholder,
  style,
}: Props) {
  return (
    <TextInput
      style={[{fontSize: 24, padding: 4}, style]}
      onChangeText={onChange}
      value={value}
      placeholder={placeholder}
    />
  );
}

type Props = {
  value: string;
  style?: StyleProp<any>;
  onChange: (text: string) => void;
  placeholder?: string;
};
