import React from 'react';

import { Row, Col } from "./bootstrap-component.jsx";



import {
  Container,
  Button,
  ButtonGroup
 } from 'reactstrap';
  
const SlideSecond  = () => {
    
  return (
    <div className="SlideSecond">

        <Container>
          <Row>
            <Col span={12} >
              <h1>Duis vestibulum, nec dapibus ligula</h1>
              <h2>In dapibus dui ac erat lobortis.</h2>
              <p>Nulla quis velit molestie, congue leo ac, bibendum dui. Pellentesque ut sem vel metus ornare aliquam vel ut neque. Suspendisse ac ipsum nec ipsum ultricies porta. Praesent ut ornare lacus.</p>
            </Col>
          </Row>
          

          <Row>
            <Col span={4} >
              <h3>Fusce a arcu</h3>
              <p>Feugiat odio et, varius enim. Sed eleifend ex et auctor lacinia. Fusce in efficitur lorem. Donec blandit urna et dolor ultrices pellentesque. </p>
            </Col>
            <Col span={4} >
              <h3>Nam dolor massa, vulputate</h3>
              <p>Molestie, congue leo ac, bibendum dui. Pellentesque ut sem vel metus ornare aliquam vel ut neque. </p>
            </Col>
            <Col span={4} >
              <h3>Pellentesque ut sem</h3>
              <p>Vel metus ornare aliquam vel ut neque. Suspendisse ac ipsum nec ipsum ultricies porta. Praesent ut ornare lacus.  Pellentesque non tortor vel erat feugiat.</p>
            </Col>
          </Row>
          <Row>
            <Col span={12} >
              <p>Nulla quis velit molestie, congue leo ac, bibendum dui. Pellentesque ut sem vel metus ornare aliquam vel ut neque. Suspendisse ac ipsum nec ipsum ultricies porta. Praesent ut ornare lacus.</p>
              <ButtonGroup>
                <Button>Donec velita </Button>
                <Button>Nulla quis velit molestie</Button>
              </ButtonGroup>
            </Col>
          </Row>

        </Container>
    </div>
  );
}

export default SlideSecond ;
