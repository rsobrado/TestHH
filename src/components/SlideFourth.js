import React from 'react';

import { Row, Col, Button } from "./bootstrap-component.jsx";


import {
    Container,
    NavLink
   } from 'reactstrap';
  
const SlideFourth  = () => {
    
  return (
    <div className="SlideFourth">

        <Container>
        <Row>
          <div className="slider-content">
            <Col span={12} >
              <h1>Donec sit amet</h1>
              <h2>Curabitur lacinia luctus at justus.</h2>
              <p>Suspendisse venenatis tempus magna non ultrices. Consectetur In molestie nibh eget</p>
              <NavLink href="#">Donec maximus eros mi</NavLink>
            </Col>
          </div>
        </Row>


        <Row >
            <Col span={12}>
            <div className="hero-slider shaded-items">
              <div className="hero-item">
                <h3>Nam dolor massa, vulputate</h3>
                <p>Pellentesque ut sem vel metus ornare aliquam vel ut neque. Suspendisse ac ipsum nec ipsum ultricies porta.</p>

                <em className="">Fusce in efficitur <NavLink href="tel:555-555-5555">555-555-5555</NavLink> Curabitur viverra, molestie tincidunt.</em>
                  <Button>Donec velita </Button>
              </div>
              <div className="hero-item">
                <h3>Sed vestibulum odiosem, sit ametr</h3>
                <p>Fusce non sodales odio, sit amet dignissim ipsum. Pellentesque eleifend felis augue.</p>
                <p> 
                  
                </p>
              </div>
              <div className="hero-item">
                <h3>Nullam ac convallis diam, eu prellfua</h3>
                <p>Vel metus ornare aliquam vel ut neque. Suspendisse ac ipsum nec ipsum ultricies porta. Praesent ut ornare lacus.  Pellentesque non tortor vel erat feugiat.</p>
                <p className="small">Vivamus vitae urna nisi. Suspendisse ex nunc, ornare eget consectetur sit amet eget consectetur sit amet.</p>
                <em className="">Fusce in efficitur <NavLink href="tel:555-555-5555">555-555-5555</NavLink> Curabitur viverra, molestie tincidunt.</em>
              </div>
            </div>
            </Col>
          </Row>


        </Container>
    </div>
  );
}

export default SlideFourth ;
