import ButtonCircle from '../ButtonCircle/ButtonCircle';
import { PaginationProps } from './Pagination.props';
import * as S from './Pagination.style';
import ArrowIcon from '../Icons/Arrow';

export function Pagination({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) {
  return (
    <S.PaginationWrapper>
      <S.PageIndicator>
        {currentPage} / {totalPages}
      </S.PageIndicator>
      <S.ButtonWrapper>
        <ButtonCircle
          borderColor="rgba(66, 86, 122, .5)"
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          <ArrowIcon />
        </ButtonCircle>
        <ButtonCircle
          borderColor="rgba(66, 86, 122, .5)"
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          rotate={180}
        >
          <ArrowIcon />
        </ButtonCircle>
      </S.ButtonWrapper>
    </S.PaginationWrapper>
  );
}
