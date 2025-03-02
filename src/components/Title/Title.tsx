import { TEXT } from '../../content/content';
import * as S from './Title.style';

export function Title() {
  return (
    <>
      <S.TitleWrap>
        <S.Divider />
        <S.Title>{TEXT.carousel.title.ru}</S.Title>
      </S.TitleWrap>
    </>
  );
}
