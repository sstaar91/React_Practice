import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import { ThemeProvider } from 'styled-components';

import { theme } from './styles/theme';
import { GlobalStyles } from './styles/GlobalStyles';

ReactDOM.render(
  <>
    <GlobalStyles />
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </>,
  document.getElementById('root')
);
