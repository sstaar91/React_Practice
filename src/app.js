import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Todo } from './pages/todo/Todo';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route exact path="/todo" element={<Todo />} />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
