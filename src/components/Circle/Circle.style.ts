import styled from 'styled-components';

export const CircleWrap = styled.div`
  display: flex;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const Circle = styled.div`
  border: 1px solid;
  border-color: rgba(48, 62, 88, 0.2);
  border-radius: 50%;
  width: 530px;
  height: 530px;
`;

export const ItemWrapper = styled.div<{
  angle: number;
  isActive: boolean;
}>`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: ${({ angle }) =>
    `rotate(${angle}deg) translate(265px) rotate(-${angle}deg)`};
  display: flex;
  align-items: center;
  gap: 20px;
  transition: all 0.3s ease;
  opacity: 1;
  cursor: pointer;

  &:hover {
    transform: ${({ angle }) =>
      `rotate(${angle}deg) translate(265px) rotate(-${angle}deg) scale(1.2)`};
  }
`;
export const ItemText = styled.span`
  transition: opacity 0.3s ease;
  color: ${(props) => props.theme.palette.primary};
  font-family: ${(props) => props.theme.fonts.PTSans};
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 30px;
  letter-spacing: 0;
  left: 50%;
  transform: translate(70px, -10px);
  display: block;
  ${ItemWrapper}:hover & {
    opacity: 1;
  }
`;

export const ItemCircle = styled.div<{ isActive: boolean }>`
  position: absolute;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid;
  border-color: rgba(48, 62, 88, 0.5);
  top: 50%;
  left: 50%;
  color: ${(props) => props.theme.palette.primary};
  font-family: ${(props) => props.theme.fonts.PTSans};
  font-style: normal;
  font-weight: 400;
  line-height: 30px;
  width: ${({ isActive }) => (isActive ? '56px' : '6px')};
  height: ${({ isActive }) => (isActive ? '56px' : '6px')};
  border-radius: 50%;
  background-color: ${({ isActive }) =>
    isActive
      ? (props) => props.theme.palette.bg
      : (props) => props.theme.palette.primary};
  font-size: ${({ isActive }) => (isActive ? '20px' : '0')};
  cursor: pointer;
  transition: all 0.3s ease;
  transform: translate(
    ${({ isActive }) => (isActive ? '-40px, -40px' : '-3px, -3px')}
  );
  &::after {
    content: '';
    position: absolute;
    left: -24px;
    top: -24px;
    width: 50px;
    height: 50px;
  }
  &:hover {
    width: 56px;
    height: 56px;
    font-size: 20px;
    background: ${(props) => props.theme.palette.bg};
    transform: translate(-35px, -35px);
  }
`;
