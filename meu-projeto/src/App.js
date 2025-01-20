import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Index from './components/Index';

function App() {
  return (

      <div className="App">
        <Header/>
          <p className='sla'>
            <Index/>
          </p>
        <Footer/>
      </div>

  );
}

export default App;
