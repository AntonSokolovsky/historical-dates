import Card from './Card/Card';
import { CardsProps } from './Cards.props';
import * as S from './Cards.style';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperType } from 'swiper/types';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import ButtonCircle from '../ButtonCircle/ButtonCircle';
import ArrowIcon from '../Icons/Arrow';
import { useRef, useState } from 'react';
import { useTheme } from 'styled-components';
import useMediaQuery from '../../hooks/useMediaQuery';

export function Cards({ cards }: CardsProps) {
  const swiperRef = useRef<SwiperType | null>(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  const handleNext = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext();
    }
  };

  const handlePrev = () => {
    if (swiperRef.current) {
      swiperRef.current.slidePrev();
    }
  };

  const handleSlideChange = (swiper: SwiperType) => {
    setIsBeginning(swiper.isBeginning);
    setIsEnd(swiper.isEnd);
  };
  const theme = useTheme();
  const isMobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);
  return (
    <>
      <S.CardsWrap>
        {!isBeginning && !isMobile && (
          <ButtonCircle
            onClick={handlePrev}
            borderStyle="none"
            size="40px"
            backgroundColor={'#FFF'}
            shadow="true"
          >
            <ArrowIcon />
          </ButtonCircle>
        )}
        <S.Cards>
          <Swiper
            watchOverflow
            grabCursor
            autoHeight={false}
            freeMode={true}
            breakpoints={{
              320: {
                slidesPerView: 1.4,
              },
              568: {
                slidesPerView: 2,
              },
              1600: {
                slidesPerView: 3,
              },
            }}
            spaceBetween={isMobile ? 25 : 80}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
              setIsBeginning(swiper.isBeginning);
              setIsEnd(swiper.isEnd);
            }}
            onSlideChange={handleSlideChange}
          >
            {cards.map((card) => (
              <SwiperSlide key={card.title}>
                <Card title={card.title} text={card.text} />
              </SwiperSlide>
            ))}
          </Swiper>
        </S.Cards>
        {!isEnd && !isMobile && (
          <ButtonCircle
            borderColor="rgba(66, 86, 122, .5)"
            borderStyle="none"
            size="40px"
            backgroundColor={'#FFF'}
            rotate={180}
            onClick={handleNext}
            shadow="true"
          >
            <ArrowIcon />
          </ButtonCircle>
        )}
      </S.CardsWrap>
    </>
  );
}
