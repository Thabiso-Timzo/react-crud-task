import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/home/Home';
import Create from './pages/create/Create';
import Edit from './pages/edit/Edit';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} exact />
        <Route path='/create' element={<Create />} />
        <Route path='/edit/:id' element={<Edit />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
