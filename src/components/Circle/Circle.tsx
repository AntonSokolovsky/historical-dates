import { CircleProps } from './Circle.props';
import * as S from './Circle.style';

function getAngle(
  totalItems: number,
  activeIndex: number,
  currentIndex: number
): number {
  const step = 360 / totalItems;
  const activeAngle = step * (totalItems - 1);
  const indexDiff =
    ((currentIndex - activeIndex + totalItems) % totalItems) + 1;
  const currentAngle = (activeAngle + step * indexDiff) % 360;

  return currentAngle;
}

export function Circle({ items, currentPage, onPageChange }: CircleProps) {
  return (
    <S.CircleWrap>
      <S.Circle>
        {items.map((item, index) => {
          const angle = getAngle(items.length, currentPage, index);
          const isActive = index + 1 === currentPage;
          return (
            <>
              <S.ItemWrapper key={index} angle={angle} isActive={isActive}>
                <S.ItemCircle
                  isActive={isActive}
                  onClick={() => onPageChange(index + 1)}
                >
                  {index + 1}
                </S.ItemCircle>
                {isActive && <S.ItemText>{item.category}</S.ItemText>}
              </S.ItemWrapper>
            </>
          );
        })}
      </S.Circle>
    </S.CircleWrap>
  );
}
