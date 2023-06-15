import { Button as NativeBtn } from 'react-native';

export default function Button({title, onClick, disabled}: Props) {
  return (
    <NativeBtn
      color="peru"
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
