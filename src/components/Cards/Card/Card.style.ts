import styled from 'styled-components';
import { media } from '../../../theme/media';

export const CardWrap = styled.div`
  display: flex;
  flex-direction: column;
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
