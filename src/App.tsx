import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Routes from './routes';
import AppContainer from './hooks';
import GlobalStyle from './styles/glogal';

const App: React.FC = () => (
  <>
    <AppContainer>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
      <GlobalStyle />
    </AppContainer>
  </>
);

export default App;
