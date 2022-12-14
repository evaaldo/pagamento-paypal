import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './Styles/EstilosGlobais.css'
import Home from './Pages/Home/index.jsx'
import SobreMim from './Pages/SobreMim';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/SobreMim' element={<SobreMim/>} />
        <Route path='*' element={<h1>Página não encontrada</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
