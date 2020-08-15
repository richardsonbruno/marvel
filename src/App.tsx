import React from 'react';
import GlobalStyle from './global/style';

import Header from './components/Header';
import Content from './components/Content';

function App() {
  return (
    <>
      <Header />
      <Content />
      <GlobalStyle />
    </>
  );
}

export default App;
