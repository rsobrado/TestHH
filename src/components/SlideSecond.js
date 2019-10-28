import React from 'react';
import { Row, Col } from "./bootstrap-component.jsx";
import { Container, Button, ButtonGroup, NavLink} from 'reactstrap';
import ContentSeparatorEmpty from '../components/ContentSeparatorEmpty';
  
const SlideSecond  = () => {
  return (
    <div className="SlideSecond">
        <Container>
          <Row>
            <div className="slider-content">
              <Col span={12} >
                <h1>Duis vestibulum, nec dapibus ligula</h1>
                <h2>In dapibus dui ac erat lobortis.</h2>
                <p>Nulla quis velit molestie, congue leo ac, bibendum dui. Pellentesque ut sem vel metus ornare aliquam vel ut neque. Suspendisse ac ipsum nec ipsum ultricies porta. Praesent ut ornare lacus.</p>
              </Col>
            </div>
          </Row>
          <Row >
            <Col span={12}>
            <div className="hero-slider shaded">
              <div className="hero-item">
                <h3>Fusce a arcu</h3>
                <p>Feugiat odio et, varius enim. Sed eleifend ex et auctor lacinia. Fusce in efficitur lorem. Donec blandit urna et dolor ultrices pellentesque. </p>
              </div>
              <div className="hero-item">
                <h3>Nulla quis velit</h3>
                <p>Molestie, congue leo ac, bibendum dui. Pellentesque ut sem vel metus ornare aliquam vel ut neque. </p>
              </div>
              <div className="hero-item">
                <h3>Pellentesque ut sem</h3>
                <p>Vel metus ornare aliquam vel ut neque. Suspendisse ac ipsum nec ipsum ultricies porta. Praesent ut ornare lacus.  Pellentesque non tortor vel erat feugiat.</p>
              </div>
            </div>
            </Col>
          </Row>
          <Row>
            <div className="slider-content">
              <Col span={12} >
                <em className="">Fusce in efficitur <NavLink href="tel:555-555-5555">555-555-5555</NavLink> Curabitur viverra, molestie tincidunt.</em>
                <ButtonGroup>
                  <Button>Donec velita </Button>
                  <Button>Nulla quis velit molestie</Button>
                </ButtonGroup>
                <p className="disclaimer">Duis vestibulum ultricies leo, nec dapibus ligula luctus ut. In dapibus dui ac erat lobortis pulvinar. Fusce a arcu tempor, feugiat odio et, varius enim. Nulla quis velit 
  molestie, congue leo ac, bibendum dui. Pellentesque ut sem vel metus ornare aliquam vel ut neque. Suspendisse ac ipsum nec ipsum ultricies porta. Praesent ut 
  ornare lacus. Pellentesque non tortor vel erat feugiat elementum.</p>
              </Col>
            </div>
          </Row>
        </Container>
      <ContentSeparatorEmpty></ContentSeparatorEmpty>
    </div>

    
  );
}

export default SlideSecond ;
