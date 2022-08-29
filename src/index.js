import React from 'react';
import ReactDOM from 'react-dom';
import Router from './Router';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import { GlobalStyles } from './styles/GlobalStyles';

import { Provider } from 'react-redux';
import store from './store';

ReactDOM.render(
  <>
    <GlobalStyles />
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Router />
      </ThemeProvider>
    </Provider>
  </>,
  document.getElementById('root')
);
