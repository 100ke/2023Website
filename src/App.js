import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar.jsx';
import Slider from './components/Slider.jsx';

import { Container } from 'react-bootstrap';
import MainContents from './components/MainContents.jsx';

function App() {
  return (
    <div className="App">
      <header className="App-header mb-3">
      <NavBar/>
      </header>
      <Container class="mainSlider"><Slider/></Container>
      <MainContents/>
    </div>
  );
}

export default App;
