import './App.css';
import Context from './Context/Context';
import Header from './Layout/Header';
import Main from './Layout/Main';
import Footer from './Layout/Footer';

function App() {

  return (
    <Context>
      <div className='page'>
        <Header/>
        <Main/>
        <Footer/>
      </div>
    </Context>
    
  );
}

export default App;
