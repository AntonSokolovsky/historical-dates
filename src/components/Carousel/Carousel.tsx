import { useState } from 'react';
import { Title } from '../Title';
import { Years } from '../Years';
import * as S from './Carousel.style';
import { Pagination } from '../Pagination';
export function Carousel() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 10;

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
  };
  return (
    <S.Carousel>
      <Title />
      <Years yearFrom="2012" yearTo="2015" />
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </S.Carousel>
  );
}
