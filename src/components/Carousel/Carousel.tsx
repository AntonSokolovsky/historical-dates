import { useState } from 'react';
import { Title } from '../Title';
import { Years } from '../Years';
import * as S from './Carousel.style';
import { Pagination } from '../Pagination';
import { IContent } from '../../interfaces/IContent';
import { Cards } from '../Cards';
export function Carousel({ timeline }: IContent) {
  const [currentPage, setCurrentPage] = useState(1);
  const [currentFromYear, setCurrentFromYear] = useState(
    timeline[currentPage - 1].fromYear
  );
  const [currentToYear, setCurrentToYear] = useState(
    timeline[currentPage - 1].toYear
  );
  const totalPages = timeline.length;
  const [currentCards, setCurrentCards] = useState(
    timeline[currentPage - 1].cards
  );

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
    setCurrentFromYear(timeline[currentPage - 1].fromYear);
    setCurrentToYear(timeline[currentPage - 1].toYear);
    setCurrentCards(timeline[currentPage - 1].cards);
  };
  return (
    <S.Carousel>
      <Title />
      <Years yearFrom={currentFromYear} yearTo={currentToYear} />
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
      <Cards cards={currentCards} />
    </S.Carousel>
  );
}
