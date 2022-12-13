import './Styles/GlobalStyles.css'
import React from "react"
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom'
import PagamentoCabelo from './Pages/PagamentoBarba';
import PagamentoBarba from './Pages/PagamentoCabelo';
import PagamentoCabeloBarba from './Pages/PagamentoCabeloBarba';

function App() {
  return (
    <Router>
      <Link to='./Pages/PagamentoCabelo'>Pacote cabelo</Link>
      <Link to='./Pages/PagamentoBarba'>Pacote barba</Link>
      <Link to='./Pages/PagamentoCabeloBarba'>Pacote cabelo e barba</Link>
      <Routes>
        <Route path='./Pages/PagamentoCabelo' element={<PagamentoCabelo/>}/>
        <Route path='./Pages/PagamentoBarba' element={<PagamentoBarba/>}/>
        <Route path='./Pages/PagamentoCabeloBarba' element={<PagamentoCabeloBarba/>}/>
      </Routes>
    </Router>
  );
}

export default App;
