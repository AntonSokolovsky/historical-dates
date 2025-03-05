import styled from 'styled-components';
import { ButtonCircleProps } from './ButtonCircle.props';

export const ButtonCircle = styled.button<ButtonCircleProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${(props) => props.size || '50px'};
  height: ${(props) => props.size || '50px'};
  background-color: ${(props) => props.backgroundColor || 'transparent'};
  color: ${(props) => props.color || props.theme.palette.primary};
  border: ${(props) => props.stroke || '2px'};
  border-style: ${(props) => props.borderStyle || 'solid'};
  border-color: ${(props) => props.borderColor || props.theme.palette.primary};
  border-radius: 50%;
  transform: rotate(${(props) => props.rotate || 0}deg);
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  position: ${(props) => props.position || 'relative'};

  &:hover {
    opacity: 0.8;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;
