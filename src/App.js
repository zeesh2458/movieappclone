
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './componant/Home';
import Singlemovie from './componant/Singlemovie';
import Error from './componant/Error';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='movies/:id' element={<Singlemovie />} />
        <Route path='*' element={<Error/>} />
      </Routes>
    </>
  );
}

export default App;
