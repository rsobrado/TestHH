import React from 'react';
import { Row, Col } from "./bootstrap-component.jsx";
import { Container, Button, ButtonGroup, NavLink} from 'reactstrap';


const SlideThird  = () => {
    
  return (
    <div className="SlideThird">
        <Container>
          <Row>
            <div className="slider-content">
              <Col span={12} >
                <h1>Phasellus conse</h1>
                <p>Duis vestibulum ultricies leo, nec dapibus ligula luctus ut. In dapibus dui ac erat lobortis pulvinar. Fusce a arcu tempor, feugiat odio et, varius enim. Nulla quis velit molestie, congue leo ac, bibendum dui. Pellentesque ut sem vel metus ornare aliquam vel ut neque. Suspendisse ac ipsum nec ipsum ultricies porta.</p>
              </Col>
            </div>
          </Row>
          <Row >
            <Col span={12}>
            <div className="hero-slider two-cols">
              <div className="hero-item has-child">
                <div className="hero-item-child">
                  <h3>₡2,500</h3>
                  <p>Donecandit <br/>₡1,000,000+</p>
                </div>
                <div className="hero-item-child">
                  <h3>₡1,200</h3>
                  <p>Donecandit <br/>₡500K – ₡999,999</p>
                </div>
              </div>
              <div className="hero-item has-child">
                <div className="hero-item-child">
                  <h3>₡600</h3>
                  <p>Donecandit <br/>₡250K – ₡499,999</p>
                </div>
                <div className="hero-item-child">
                  <h3>₡300</h3>
                  <p>Donecandit <br/>₡100K – ₡249,999</p>
                </div>
              </div>
              <div className="hero-item has-child">
                <div className="hero-item-child">
                  <h3>₡200</h3>
                  <p>Donecandit <br/>₡50K – ₡99,999</p>
                </div>
                <div className="hero-item-child">
                  <h3>₡100</h3>
                  <p>Donecandit <br/>₡25K – ₡49,999</p>
                </div>
              </div>
            </div>
            </Col>
          </Row>
          <Row>
            <div className="slider-content">
              <Col span={12} >
                <p>Donec sit amet lectus elementum, mollis odio eu, blandit purus. In iaculis sapien eu vestibulum eleifend.</p>
                <em className="">Donec eu ante erat. Vivamus iaculis <NavLink href="tel:555-555-5555">555-555-5555</NavLink></em>
                <ButtonGroup>
                  <Button>Donec velita </Button>
                  <Button>Nulla quis velit molestie</Button>
                </ButtonGroup>
              </Col>
            </div>
          </Row>
        </Container>
    </div>
  );
}

export default SlideThird ;
