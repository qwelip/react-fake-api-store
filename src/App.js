import Context from './Context/Context';
import Header from './Layout/Header/Header';
import Main from './Layout/Main/Main';
import Footer from './Layout/Footer/Footer';
import { BrowserRouter } from 'react-router-dom';

function App() {

  return (
    <BrowserRouter basename='react-fake-api-store'>
      <Context>
        <div className='page'>
          <Header/>
          <Main/>
          <Footer/>
        </div>
      </Context>
    </BrowserRouter>
  );
}

export default App;
