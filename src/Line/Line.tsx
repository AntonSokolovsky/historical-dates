import { LineProps } from './Line.props';
import * as S from './Line.style';
export function Line({ direction }: LineProps) {
  return <S.Line direction={direction} />;
}
