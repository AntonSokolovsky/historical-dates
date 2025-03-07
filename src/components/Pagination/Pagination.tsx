import ButtonCircle from '../ButtonCircle/ButtonCircle';
import { PaginationProps } from './Pagination.props';
import * as S from './Pagination.style';
import ArrowIcon from '../Icons/Arrow';
import { useTheme } from 'styled-components';
import useMediaQuery from '../../hooks/useMediaQuery';
import { PaginationBullet } from '../PaginationBullet';

export function Pagination({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) {
  const theme = useTheme();
  const isMobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);
  return (
    <S.PaginationWrapper>
      <S.PageIndicator>
        {currentPage} / {totalPages}
      </S.PageIndicator>
      <S.BulletButtonsWrap>
        <S.ButtonWrapper>
          <ButtonCircle
            size={isMobile ? '25px' : '50px'}
            borderColor="rgba(66, 86, 122, .5)"
            onClick={() => onPageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            <ArrowIcon />
          </ButtonCircle>
          <ButtonCircle
            size={isMobile ? '25px' : '50px'}
            borderColor="rgba(66, 86, 122, .5)"
            onClick={() => onPageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            rotate={180}
          >
            <ArrowIcon />
          </ButtonCircle>
        </S.ButtonWrapper>
        {isMobile && (
          <PaginationBullet
            currentPage={currentPage}
            onPageChange={onPageChange}
            totalPages={totalPages}
          />
        )}
      </S.BulletButtonsWrap>
    </S.PaginationWrapper>
  );
}
