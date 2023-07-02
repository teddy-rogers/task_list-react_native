import { Button as NativeBtn } from 'react-native';
import styleConstants from '../../libs/constants/styleConstants';

export default function Button({title, onClick, disabled}: Props) {
  return (
    <NativeBtn
      color={styleConstants.red}
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
