import styled from 'styled-components';

export const Years = styled.p`
  display: flex;
  text-align: center;
  justify-content: center;
  font-family: 'PT Sans';
  font-size: 200px;
  font-style: normal;
  font-weight: 700;
  line-height: 160px;
  letter-spacing: -4px;
  margin-top: 96px;
  position: relative;
  gap: 95px;
`;

export const FromYear = styled.span`
  display: block;
  color: ${({ theme }) => theme.palette.accent1};
`;

export const ToYear = styled.span`
  display: block;
  color: ${({ theme }) => theme.palette.accent2};
`;
