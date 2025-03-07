export interface ITheme {
  palette: {
    primary: string;
    secondary: string;
    accent1: string;
    accent2: string;

    bg: string;
    font: string;
  };
  fonts: {
    PTSans: string;
    BebasNeue: string;
  };
  breakpoints: {
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
  };
}
