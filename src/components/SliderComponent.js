

import React, { useState, useCallback, useRef } from "react";

import RBCarousel from "react-bootstrap-carousel";
import './SliderComponent.scss';
import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";
import FirstSlide from './SlideFirst';
import SecondSlide from './SlideSecond';
import ThirdSlide from './SlideThird';
import FourthSlide from './SlideFourth';

const styles = { height: "calc(100vh)", width: "100%" };
const SliderComponent  = (props) => {
    const [autoplay, setAutoplay] = useState(true);
    // const slider_ref = useRef(null);
    // const _autoplay = useCallback(() => setAutoplay(autoplay => !autoplay), []);
    const _visiableOnSelect = useCallback(active => {}, []);
    // const _onSelect = useCallback((active, direction) => {}, []);
    // const _goToSlide = useCallback(() => slider_ref.current.goToSlide(1), []);

  return (
    <div >
          <RBCarousel
            autoplay={autoplay}
            pauseOnVisibility={true}
            onSelect={_visiableOnSelect}
            slideshowSpeed={4000}
            version={4}
          >
          <div style={{ ...styles, backgroundColor: "#e3e3e3" }}>
            <FirstSlide></FirstSlide>
          </div>
          <div style={{ ...styles, backgroundColor: "#e3e3e3" }}>
            <SecondSlide></SecondSlide>
          </div>
            <div style={{ ...styles, backgroundColor: "#e3e3e3" }}>
                <ThirdSlide></ThirdSlide>
            </div>
            <div style={{ ...styles, backgroundColor: "#e3e3e3" }}>
                <FourthSlide></FourthSlide>
            </div>
          </RBCarousel>
    </div>
  );
}




// ReactDOM.render(<DemoV4 />, document.getElementById("Demo"));
export default SliderComponent;