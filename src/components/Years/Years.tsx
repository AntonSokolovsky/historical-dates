import gsap from 'gsap';
import { Line } from '../../Line';
import { Circle } from '../Circle';
import { YearsProps } from './Years.props';
import * as S from './Years.style';
import { useEffect, useRef, useState } from 'react';

export function Years({
  yearFrom,
  yearTo,
  items,
  currentPage,
  onPageChange,
  duration = 1,
}: YearsProps) {
  const fromRef = useRef<HTMLSpanElement>(null);
  const toRef = useRef<HTMLSpanElement>(null);
  const [currentFrom, setCurrentFrom] = useState(yearFrom);
  const [currentTo, setCurrentTo] = useState(yearTo);

  useEffect(() => {
    gsap.fromTo(
      fromRef.current,
      { innerText: currentFrom },
      {
        innerText: yearFrom,
        duration,
        snap: { innerText: 1 },
        ease: 'power3.out',
        onUpdate: () => {
          if (fromRef.current) {
            setCurrentFrom(parseInt(fromRef.current.innerText, 10));
          }
        },
      }
    );

    gsap.fromTo(
      toRef.current,
      { innerText: currentTo },
      {
        innerText: yearTo,
        duration,
        snap: { innerText: 1 },
        ease: 'power3.out',
        onUpdate: () => {
          if (toRef.current) {
            setCurrentTo(parseInt(toRef.current.innerText, 10));
          }
        },
      }
    );
  }, [yearFrom, yearTo, duration, currentFrom, currentTo]);
  return (
    <S.Years>
      <Circle
        items={items}
        currentPage={currentPage}
        onPageChange={onPageChange}
      />
      <S.FromYear ref={fromRef}>{currentFrom}</S.FromYear>
      <S.ToYear ref={toRef}>{currentTo}</S.ToYear>
      <Line direction="horizontal" />
    </S.Years>
  );
}
