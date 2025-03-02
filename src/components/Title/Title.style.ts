import styled from 'styled-components';

export const TitleWrap = styled.div`
  width: 433px;
  height: 134px;
  display: flex;
  gap: 78px;
  align-items: center;
`;

export const Divider = styled.div`
  width: 5px;
  height: 120px;
  background: linear-gradient(#3877ee, #ef5da8);
`;

export const Title = styled.p`
  color: ${({ theme }) => theme.palette.primary};
  font-family: 'PT Sans', sans-serif;
  font-size: 56px;
  font-style: normal;
  font-weight: 700;
  line-height: 120%;
  max-width: 353px;
  margin: 0;
`;
