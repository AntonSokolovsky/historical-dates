import styled from 'styled-components';
import { media } from '../../theme/media';

export const Cards = styled.div`
  display: flex;
  width: 1260px;
  justify-content: center;
`;

export const CardsWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${media.xs} {
    margin: 20px 0 0 0;
  }
  ${media.sm} {
    margin: 56px 40px 0 40px;
  }
`;
