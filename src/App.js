import React from 'react';

import Global from './styles/GlobalStyles';
import Layout from './components/Layout';
import NavBar from './components/NavBar';

function App() {
  return (
    <>
      <Layout>
        <NavBar />
      </Layout>
      <Global />
    </>
  );
}

export default App;
