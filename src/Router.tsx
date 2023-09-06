import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from 'components/Nav';
import Home from 'pages/Home';
import Layout from 'components/Layout';

const Router = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default Router;
