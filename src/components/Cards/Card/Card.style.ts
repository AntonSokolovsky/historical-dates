import styled from 'styled-components';
import { media } from '../../../theme/media';
import 'swiper/css';

export const CardWrap = styled.div`
  display: flex;
  flex-direction: column;
  ${media.xs} {
    .swiper-slide:not(.swiper-slide-active) & {
      opacity: 0.4;
    }
  }
  ${media.sm} {
    .swiper-slide:not(.swiper-slide-active) & {
      opacity: 1;
    }
  }
`;

export const CardTitle = styled.p`
  font-family: ${({ theme }) => theme.fonts.BebasNeue};
  font-size: 25px;
  font-style: normal;
  font-weight: 400;
  line-height: 120%;
  text-transform: uppercase;
  color: ${(props) => props.theme.palette.font};
  margin: 0;
  ${media.xs} {
    font-size: 16px;
  }
  ${media.sm} {
    font-size: 25px;
  }
`;

export const CardText = styled.p`
  width: 320px;
  color: ${({ theme }) => theme.palette.primary};
  font-family: 'PT Sans';
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 30px;
  ${media.xs} {
    font-size: 14px;
    line-height: 145%;
    width: 166px;
  }
  ${media.sm} {
    width: 320px;
    font-size: 20px;
    line-height: 30px;
  }
`;
