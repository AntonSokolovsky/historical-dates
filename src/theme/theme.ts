import { ITheme } from '../interfaces/styled';

export const baseTheme: ITheme = {
  palette: {
    primary: '#42567A',
    secondary: '#5D5FEF',
    bg: '#FFF',
    accent1: '#5D5FEF',
    accent2: '#EF5DA8',
    font: '#3877EE',
  },
  fonts: {
    PTSans: 'PT Sans',
    BebasNeue: 'Bebas Neue',
  },
  breakpoints: {
    xs: '320px',
    sm: '576px',
    md: '768px',
    lg: '992px',
    xl: '1200px',
  },
};
