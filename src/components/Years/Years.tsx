import { YearsProps } from './Years.props';
import * as S from './Years.style';

export function Years({ yearFrom, yearTo }: YearsProps) {
  return (
    <S.Years>
      <S.FromYear>{yearFrom}</S.FromYear> <S.ToYear>{yearTo}</S.ToYear>
    </S.Years>
  );
}
