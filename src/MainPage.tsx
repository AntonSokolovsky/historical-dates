import { Carousel } from './components/Carousel';
import { ThemeProvider } from 'styled-components';
import { baseTheme } from './theme/theme';
import GlobalStyles from './theme/GlobalStyles';

export default function MainPage() {
  return (
    <ThemeProvider theme={baseTheme}>
      <GlobalStyles />
      <Carousel />;
    </ThemeProvider>
  );
}
