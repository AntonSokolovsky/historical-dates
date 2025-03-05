import styled from 'styled-components';

export const Carousel = styled.section`
  width: 1440px;
  height: 1080px;
  border-left: 1px rgba(66, 86, 122, 0.1) solid;
  border-right: 1px rgba(66, 86, 122, 0.1) solid;
  margin: 0 160px 0 320px;
  padding-top: 170px;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.palette.bg};
  z-index: 10;
  position: relative;
  overflow: hidden;
`;
