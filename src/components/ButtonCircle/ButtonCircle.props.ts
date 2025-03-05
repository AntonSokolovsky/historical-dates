import { ButtonHTMLAttributes } from 'react';

export interface ButtonCircleProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  backgroundColor?: string;
  color?: string;
  borderColor?: string;
  borderStyle?: string;
  size?: string;
  stroke?: string;
  rotate?: number;
  position?: string;
}
