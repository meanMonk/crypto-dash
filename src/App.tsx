import React from 'react';
import Dashboard from './containers/dashboard';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
body {
  font-family: 'Inter';  
}
`

function App() {
  return (
    <div className="App">
      <GlobalStyle/>
      <Dashboard />
    </div>
  );
}

export default App;
