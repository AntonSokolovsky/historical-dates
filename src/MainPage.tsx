import { Carousel } from './components/Carousel';
import { ThemeProvider } from 'styled-components';
import { baseTheme } from './theme/theme';
import GlobalStyles from './theme/GlobalStyles';
import { TEXT } from './content/content';

export default function MainPage() {
  return (
    <ThemeProvider theme={baseTheme}>
      <GlobalStyles />
      <Carousel timeline={TEXT.carousel.info} />
    </ThemeProvider>
  );
}
