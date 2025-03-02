import styled from 'styled-components';

export const Pagination = styled.div`
  display: flex;
`;

export const PagesNumbers = styled.div`
  width: 36px;
  height: 18px;
  color: ${({ theme }) => theme.palette.primary};
  font-family: ${({ theme }) => theme.fonts.PTSans};
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const PaginationWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 80px;
  gap: 20px;
  font-size: 18px;
  font-weight: bold;
  color: ${(props) => props.theme.palette.primary};
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

export const ButtonWrapper = styled.div`
  display: flex;
  gap: 20px;
`;
