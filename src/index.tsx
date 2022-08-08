import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider } from 'styled-components';

import { App } from './App';
import { theme } from './styles/theme';
import { GlobalCSS } from './styles/global/styles';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalCSS />
      <App />
    </ThemeProvider>
  </StrictMode>
);

reportWebVitals(console.log);
