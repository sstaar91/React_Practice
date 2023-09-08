import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from 'components/Layout';
import Nav from 'components/Nav';
import Home from 'pages/Home';
import List from 'pages/List';

const Router = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/list" element={<List />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default Router;
