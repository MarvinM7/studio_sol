import React, { useEffect, useState } from "react";

import './index.css';

const DigitalNumber = (props) => {
  const {color, number} = props;
  const [leftTop, setLeftTop] = useState(color);
  const [leftBottom, setLeftBottom] = useState(color);
  const [centerTop, setCenterTop] = useState(color);
  const [centerMiddle, setCenterMiddle] = useState(color);
  const [centerBottom, setCenterBottom] = useState(color);
  const [rightTop, setRightTop] = useState(color);
  const [rightBottom, setRightBottom] = useState(color);

  useEffect(() => {
    setLeftTop(color);
    setLeftBottom(color);
    setCenterTop(color);
    setCenterMiddle(color);
    setCenterBottom(color);
    setRightTop(color);
    setRightBottom(color);
    if (number === 0) {
      setCenterMiddle('#DDDDDD');
    } else if (number === 1) {
      setLeftTop('#DDDDDD');
      setLeftBottom('#DDDDDD');
      setCenterTop('#DDDDDD');
      setCenterMiddle('#DDDDDD');
      setCenterBottom('#DDDDDD');
    } else if (number === 2) {
      setLeftTop('#DDDDDD');
      setRightBottom('#DDDDDD');
    } else if (number === 3) {
      setLeftTop('#DDDDDD');
      setLeftBottom('#DDDDDD');
    } else if (number === 4) {
      setCenterTop('#DDDDDD');
      setLeftBottom('#DDDDDD');
      setCenterBottom('#DDDDDD');
    } else if (number === 5) {
      setLeftBottom('#DDDDDD');
      setRightTop('#DDDDDD');
    } else if (number === 6) {
      setRightTop('#DDDDDD');
    } else if (number === 7) {
      setLeftTop('#DDDDDD');
      setLeftBottom('#DDDDDD');
      setCenterMiddle('#DDDDDD');
      setCenterBottom('#DDDDDD');
    } else if (number === 9) {
      setLeftBottom('#DDDDDD');
    }
  }, [number, color]);

  return (
    <div className="number">
      <div className="left">
        <div className="left-bar left-top" style={{backgroundColor: leftTop}}></div>
        <div className="left-bar left-bottom" style={{backgroundColor: leftBottom}}></div>
      </div>
      <div className="center">
        <div className="center-bar center-top" style={{backgroundColor: centerTop}}></div>
        <div className="center-bar center-middle" style={{backgroundColor: centerMiddle}}></div>
        <div className="center-bar center-bottom" style={{backgroundColor: centerBottom}}></div>
      </div>
      <div className="right">
        <div className="right-bar right-top" style={{backgroundColor: rightTop}}></div>
        <div className="right-bar right-bottom" style={{backgroundColor: rightBottom}}></div>
      </div>
    </div>
  )
}

export default DigitalNumber;