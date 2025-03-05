import { Line } from '../../Line';
import { Circle } from '../Circle';
import { YearsProps } from './Years.props';
import * as S from './Years.style';

export function Years({
  yearFrom,
  yearTo,
  items,
  currentPage,
  onPageChange,
}: YearsProps) {
  return (
    <S.Years>
      <Circle
        items={items}
        currentPage={currentPage}
        onPageChange={onPageChange}
      />
      <S.FromYear>{yearFrom}</S.FromYear>
      <S.ToYear>{yearTo}</S.ToYear>
      <Line direction="horizontal" />
    </S.Years>
  );
}
