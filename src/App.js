import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar.jsx';
import Slider from './components/Slider.jsx';
import MainContents from './components/MainContents.jsx';
import PopularArticles from './components/PopularArticles.jsx';
import Footer from './components/Footer.jsx';
import { Container } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <header className="App-header mb-3">
      <NavBar/>
      </header>
      <div class="mb-5">
        <Container class="mainSlider"><Slider/></Container>
      </div>
      <MainContents/>
      <PopularArticles/>
      <footer className='bg-dark'>
        <Footer/>
      </footer>
    </div>
  );
}

export default App;
