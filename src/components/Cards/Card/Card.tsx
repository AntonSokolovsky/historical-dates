import { CardProps } from './Card.props';
import * as S from './Card.style';

export default function Card({ title, text }: CardProps) {
  return (
    <S.CardWrap>
      <S.CardTitle>{title}</S.CardTitle>
      <S.CardText>{text}</S.CardText>
    </S.CardWrap>
  );
}
