// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Home from './pages/Home/Home'

import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Login from './pages/Login/login'
import Carrinho from './pages/Carrinho/carrinho'
import Produtos from './pages/Produtos/produtos'
import CadastroMercado from './pages/CadastroMercado/cadastroMercado'
import CadastroUse from './pages/CadastroUse/cadastrouse'


function App() {
  

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/carrinho" element={<Carrinho/>}/>
        <Route path="/produtos" element={<Produtos/>}/>
        <Route path="/cadastromercado" element={<CadastroMercado/>}/>
        <Route path="/cadastrouse" element={<CadastroUse/>}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
