import React from 'react';
import './ContentSeparatorEmpty.scss';
import { ReactComponent as Savings}  from '../images/savings.svg';



import {
  Container,
  NavLink
 } from 'reactstrap';


const ContentSeparatorEmpty = (props) => {

  return (
    

    // <div className={"ContentSeparatorEmpty" + props.customClass}>
    <div className="ContentSeparatorEmpty" >
        <Container fluid={true} >
            <Container >
            </Container>
        </Container>
    </div>
  );
}

export default ContentSeparatorEmpty;
