import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Main } from './pages/Main';
import { Todo } from './pages/todo/Todo';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Main />} />
          <Route exact path="/todo" element={<Todo />} />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
