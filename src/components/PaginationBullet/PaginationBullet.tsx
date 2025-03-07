import { PaginationBulletProps } from './PaginationBullet.props';
import * as S from './PaginationBullet.style';

export function PaginationBullet({
  totalPages,
  currentPage,
  onPageChange,
}: PaginationBulletProps) {
  return (
    <S.BulletsContainer>
      {Array.from({ length: totalPages }, (_, index) => (
        <S.Bullet
          key={index}
          isActive={index + 1 === currentPage}
          onClick={() => onPageChange(index + 1)}
        />
      ))}
    </S.BulletsContainer>
  );
}
