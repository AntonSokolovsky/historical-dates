import styled from 'styled-components';
import { media } from '../../theme/media';

export const Carousel = styled.section`
  max-width: 1440px;
  max-height: 1080px;
  margin: 0 160px 0 320px;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.palette.bg};
  z-index: 10;
  position: relative;
  ${media.xs} {
    margin: 0;
    padding: 59px 20px 0 20px;
  }
  ${media.sm} {
    margin: 0 40px 0 40px;
    padding: 0;
  }
  ${media.md} {
    margin: 0 60px 0 60px;
    border-left: 1px rgba(66, 86, 122, 0.1) solid;
    border-right: 1px rgba(66, 86, 122, 0.1) solid;
  }
  ${media.lg} {
    margin: 0 160px 0 320px;
  }
`;
