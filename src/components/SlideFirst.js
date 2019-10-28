import React from 'react';
import { Row, Col } from "./bootstrap-component.jsx";
import { Container, Button} from 'reactstrap';
import ContentHero from '../components/ContentHero';
  
const SlideFirst  = () => {
    
  return (
    <div>
    <div className="SlideFirst">
        <Container>
          <Row>
            <Col span={12} >
              <h1 className="magnified"> Ipsum dolor sit amet</h1>
              <h2><span className="bold">Lorem</span> Ipsum is simply dummy text.</h2>
              <p><Button color="primary">Donec velita </Button></p>
              <p><Button color="primary">Nulla quis velit molestie</Button></p>
            </Col>
          </Row>
            <div className="cta-bounce bounce">
              <span className="cta-arrow bounce">blandit purus</span>
            </div>
        </Container>
    </div>
        <ContentHero 
        title='Lorem Ipsum' 
        intro='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam posuere odio orci.'
        content='Duis vestibulum ultricies leo, nec dapibus ligula luctus ut. In dapibus dui ac erat lobortis pulvinar. Fusce a arcu tempor, feugiat odio et, varius enim.'
        cta='Phasellus consequat rutrum ante eget aliquam.'>
      </ContentHero>
      </div>
  );
}

export default SlideFirst ;
