import styled from 'styled-components';

export const Years = styled.p`
  text-align: center;
  font-family: 'PT Sans';
  font-size: 200px;
  font-style: normal;
  font-weight: 700;
  line-height: 160px;
  letter-spacing: -4px;
  margin-top: 96px;
`;

export const FromYear = styled.span`
  color: ${({ theme }) => theme.palette.accent1};
`;

export const ToYear = styled.span`
  color: ${({ theme }) => theme.palette.accent2};
`;
