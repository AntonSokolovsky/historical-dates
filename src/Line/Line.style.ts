import styled from 'styled-components';
import { LineProps } from './Line.props';

export const Line = styled.div<LineProps>`
  border: 1px solid;
  border-color: ${(props) => props.theme.palette.primary};
  width: ${(props) => (props.direction === 'horizontal' ? '100%' : 0)};
  height: ${(props) => (props.direction === 'vertical' ? '100%' : 0)};
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: 0.1;
  z-index: -5;
`;
