import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './componentes/estaticos/footer/Footer';
import Navbar from './componentes/estaticos/navbar/Navbar';
import CadastroPost from './componentes/posts/cadastroPostagem/CadastroPost';
import DeletarPostagem from './componentes/posts/deletarPostagem/DeletarPostagem';

import CadastroTema from './componentes/themes/cadastroTema/CadastroTema';
import DeletarTema from './componentes/themes/deletarTema/DeletarTema';
import ListaTema from './componentes/themes/listatema/ListaTema';
import CadastroUsuario from './pages/cadastro/Cadastro';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import store from './store/storege';
import { Provider } from 'react-redux';
import ListaPostagem from './componentes/posts/listapostagem/ListaPostagem';

function App() {
  return (
    <>

      <Provider store={store}>
        <Router>
          <Navbar />

          <div style={{ minHeight: '100vh' }}>
            <Routes>
              <Route path="/" element={<Login />} />

              <Route path="/login" element={<Login />} />

              <Route path="/home" element={<Home />} />

              <Route path="/cadastrousuario" element={<CadastroUsuario />} />

              <Route path="/temas" element={<ListaTema />} />

              <Route path="/posts" element={<ListaPostagem />} />

              <Route path="/formularioPostagem" element={<CadastroPost />} />

              <Route path="/formularioPostagem/:id" element={<CadastroPost />} />

              <Route path="/formularioTema" element={<CadastroTema />} />

              <Route path="/formularioTema/:id" element={<CadastroTema />} />

              <Route path="/deletarPostagem/:id" element={<DeletarPostagem />} />

              <Route path="/deletarTema/:id" element={<DeletarTema />} />


            </Routes>
          </div>

          <Footer />
        </Router>
      </Provider>
    </>
  );
}

export default App;