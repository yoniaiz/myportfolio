import React from "react";
import "../Styles/image.css";
const Line = props => {
  const target=(props.url === 'mailto:yoni29396@gmail.com')?'':'_blank'
  const icnDiv = (!props.url)?<a href='#'  > <i id={'icn'} className={props.icon}></i> </a>:<a href={props.url}  target={target}> <i id={'icn'} className={props.icon}></i> </a>

  return (
    <div className="polaroid">
      {icnDiv}
    </div>
  );
};
export default Line;
