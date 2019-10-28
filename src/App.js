import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import SliderComponent from './components/SliderComponent';
import './App.scss';


const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Navigation></Navigation>
      </header>
      <SliderComponent></SliderComponent>
      <Footer></Footer>
    </div>
  );
}

export default App;
