import styled from 'styled-components';
import { media } from '../../theme/media';

export const PaginationWrapper = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 18px;
  font-weight: bold;
  color: ${(props) => props.theme.palette.primary};
  ${media.xs} {
    margin: 60px 0 0 0;
    gap: 8px;
    font-size: 14px;
  }
  ${media.md} {
    margin: 0 0 0 80px;
    gap: 20px;
    font: 18px;
  }
`;

export const PageIndicator = styled.span`
  width: 36px;
  height: 18px;
  font-family: ${({ theme }) => theme.fonts.PTSans};
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-align: center;
`;

export const BulletButtonsWrap = styled.div`
  display: flex;
  align-items: flex-start;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  ${media.xs} {
    gap: 8px;
  }
  ${media.sm} {
    gap: 20px;
  }
`;
