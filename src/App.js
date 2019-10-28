import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import ContentHero from './components/ContentHero';
import ContentSeparator from './components/ContentSeparator';
import ContentSeparatorEmpty from './components/ContentSeparatorEmpty';
import SliderComponent from './components/SliderComponent';
import './App.scss';


const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Navigation></Navigation>
      </header>
      <SliderComponent></SliderComponent>
      <ContentHero 
        title='Lorem Ipsum' 
        intro='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam posuere odio orci.'
        content='Duis vestibulum ultricies leo, nec dapibus ligula luctus ut. In dapibus dui ac erat lobortis pulvinar. Fusce a arcu tempor, feugiat odio et, varius enim.'
        cta='Phasellus consequat rutrum ante eget aliquam.'>
      </ContentHero>
      <ContentSeparator></ContentSeparator>
      <ContentSeparatorEmpty></ContentSeparatorEmpty>
      <Footer></Footer>
    </div>
  );
}

export default App;
