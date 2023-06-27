import { Button as NativeBtn } from 'react-native';

export default function Button({title, onClick, disabled}: Props) {
  return (
    <NativeBtn
      color="#f00b42"
      title={title}
      onPress={onClick}
      disabled={disabled}
    />
  );
}

type Props = {
  onClick: () => void;
  title: string;
  disabled: boolean;
};
