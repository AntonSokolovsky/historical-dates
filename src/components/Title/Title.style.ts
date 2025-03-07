import styled from 'styled-components';
import { media } from '../../theme/media';

export const TitleWrap = styled.div`
  max-width: 433px;
  display: flex;
  gap: 78px;
  align-items: center;
`;

export const Divider = styled.div`
  width: 5px;
  height: 120px;
  background: linear-gradient(#3877ee, #ef5da8);
  ${media.xs} {
    display: none;
    height: 48px;
  }
  ${media.sm} {
    display: flex;
    height: 134px;
  }
`;

export const Title = styled.p`
  color: ${({ theme }) => theme.palette.primary};
  font-family: 'PT Sans', sans-serif;
  font-style: normal;
  font-weight: 700;
  line-height: 120%;
  max-width: 353px;
  margin: 0;
  ${media.xs} {
    font-size: 20px;
    max-width: 123px;
  }
  ${media.sm} {
    font-size: 56px;
    max-width: 353px;
  }
`;
