import Card from './Card/Card';
import { CardsProps } from './Cards.props';
import * as S from './Cards.style';

export function Cards({ cards }: CardsProps) {
  return (
    <S.Cards>
      {cards.map((card) => (
        <Card key={card.title} title={card.title} text={card.text} />
      ))}
    </S.Cards>
  );
}
