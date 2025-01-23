import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Index from './components/Index';
import Login from './components/Login';
import Cadastro from './components/Cadastro';
import SobreNos from './components/SobreNos';
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
              </Routes>
            </Router>
          </p>
          
        <Footer/>
      </div>

  );
}

export default App;
