import React from 'react';
import './ContentHero.scss';


import {
  Container,
  NavLink
 } from 'reactstrap';


const ContentHero = (props) => {
  // const isLoggedIn = props.customClass;

  return (
    

    // <div className={"ContentHero" + props.customClass}>
    <div className="ContentHero">
        <Container>
          <p><em>{props.title+','}</em> {props.intro}</p>
          <p>{props.content}</p>
          <NavLink href="#">Phasellus consequat rutrum ante eget aliquam.</NavLink>
        </Container>
    </div>
  );
}

export default ContentHero;
