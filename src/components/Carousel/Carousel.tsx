import { Title } from '../Title';
import { Years } from '../Years';
import * as S from './Carousel.style';
export function Carousel() {
  return (
    <S.Carousel>
      <Title />
      <Years yearFrom="2012" yearTo="2015" />
    </S.Carousel>
  );
}
