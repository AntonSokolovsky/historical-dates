import 'styled-components';
import { ITheme } from './interfaces/styled';

declare module 'styled-components' {
  export interface DefaultTheme extends ITheme {
    palette: {
      primary: string;
      secondary: string;
      bg: string;
      accent1: string;
      accent2: string;
      font: string;
    };
    fonts: {
      PTSans: string;
      BebasNeue: string;
    };
  }
}
