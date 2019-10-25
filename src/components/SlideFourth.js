import React from 'react';

import { Row, Col, Button, ButtonGroup } from "./bootstrap-component.jsx";


import {
    Container,
    NavLink
   } from 'reactstrap';
  
const SlideFourth  = () => {
    
  return (
    <div className="SlideFourth">

        <Container>
            <h1>Donec sit amet</h1>
            <h2>Curabitur lacinia luctus at justus.</h2>
            <p>Suspendisse venenatis tempus magna non ultrices. Consectetur In molestie nibh eget</p>
            <NavLink href="#">Donec maximus eros mi</NavLink>

      <Row>
        <Col span={4} >
          <h3>Nam dolor massa, vulputate</h3>
          <p>Pellentesque ut sem vel metus ornare aliquam vel ut neque. Suspendisse ac ipsum nec ipsum ultricies porta.</p>
        </Col>
        <Col span={4} >
          <h3>Nam dolor massa, vulputate</h3>
          <p>Pellentesque ut sem vel metus ornare aliquam vel ut neque. Suspendisse ac ipsum nec ipsum ultricies porta.</p>
        </Col>
        <Col span={4} >
          <h3>Nam dolor massa, vulputate</h3>
          <p>Pellentesque ut sem vel metus ornare aliquam vel ut neque. Suspendisse ac ipsum nec ipsum ultricies porta.</p>
        </Col>
      </Row>


        </Container>
    </div>
  );
}

export default SlideFourth ;
