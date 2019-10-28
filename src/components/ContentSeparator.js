import React from 'react';
import './ContentSeparator.scss';
import { ReactComponent as Savings}  from '../images/savings.svg';
import Background from '../images/savings-separator.jpg';


import {
  Container,
  NavLink
 } from 'reactstrap';


const ContentSeparator = (props) => {

  return (
    

    // <div className={"ContentSeparator" + props.customClass}>
    <div className="ContentSeparator" >
        <Container fluid={true} >
            <Container >
                <div className="flex">
                    <h1>Lorem ipsum dolor sit amet, consectetur.</h1>
                    <Savings/>
                </div>
            </Container>
        </Container>
    </div>
  );
}

export default ContentSeparator;
