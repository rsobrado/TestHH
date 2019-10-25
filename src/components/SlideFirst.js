import React from 'react';


import {
    Container,
    Button,
    ButtonGroup
   } from 'reactstrap';
  
const SlideFirst  = () => {
    
  return (
    <div className="SlideFirst">

        <Container>
          <h1>Lorem Ipsum dolor sit amet</h1>
          <h2>Lorem Ipsum is simply dummy text.</h2>
          <ButtonGroup>
            <Button>Donec velita </Button>
            <Button>Nulla quis velit molestie</Button>
          </ButtonGroup>

        </Container>
    </div>
  );
}

export default SlideFirst ;
