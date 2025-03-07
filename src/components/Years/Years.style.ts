import styled from 'styled-components';
import { media } from '../../theme/media';

export const Years = styled.p`
  display: flex;
  text-align: center;
  justify-content: center;
  font-family: 'PT Sans';
  font-style: normal;
  font-weight: 700;
  line-height: 160px;
  letter-spacing: -4px;
  position: relative;
  gap: 95px;
  ${media.xs} {
    font-size: 56px;
    line-height: normal;
    letter-spacing: -1.12px;
    gap: 25px;
  }

  ${media.sm} {
    font-size: 100px;
    margin-top: 56px;
  }

  ${media.md} {
    font-size: 140px;
    margin-top: 96px;
    gap: 95px;
  }
  ${media.lg} {
    font-size: 200px;
  }
`;

export const FromYear = styled.span`
  display: block;
  color: ${({ theme }) => theme.palette.accent1};
`;

export const ToYear = styled.span`
  display: block;
  color: ${({ theme }) => theme.palette.accent2};
`;
