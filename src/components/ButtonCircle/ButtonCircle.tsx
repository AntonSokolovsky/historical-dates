import { PropsWithChildren } from 'react';
import { ButtonCircleProps } from './ButtonCircle.props';
import * as S from './ButtonCircle.style';
export default function ButtonCircle({
  children,
  ...props
}: PropsWithChildren<ButtonCircleProps>) {
  return <S.ButtonCircle {...props}>{children}</S.ButtonCircle>;
}
