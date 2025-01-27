import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Index from './components/Index';
import Login from './components/Login';
import Cadastro from './components/Cadastro';
import SobreNos from './components/SobreNos';
import Perfil from './users/Perfil';
import Playlist from './users/Playlist';
import Treino from './users/Treino';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';


function App() {
  return (
      <div className="App">
          <Header/>

          <p className='sla'>
            <Router>
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/Login" element={<Login />} />
                <Route path="/Cadastro" element={<Cadastro />} />
                <Route path="/SobreNos" element={<SobreNos />} />
                <Route path="/Perfil" element={<Perfil />} />
                <Route path="/Playlist" element={<Playlist />} />
                <Route path="/Treino" element={<Treino />} />
              </Routes>
            </Router>
          </p>
          
        <Footer/>
      </div>

  );
}

export default App;
