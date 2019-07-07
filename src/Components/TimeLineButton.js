import React from 'react';
import '../Styles/TimeLineButton.scss'
const TimeLineButton = (props) => {
    const str = (props.str)?'Back':'To timeLine'
    const lan =(props.str)?'Back':(props.lan === 'en')?'To timeLine':'לציר הזמן'
    return ( 
        <div className={str}>
          <button className=" button learn-more" onTouchCancelCapture={props.goToTimeLine} onClick={props.goToTimeLine}>
            <div className="circle">
              <span className="icon arrow"></span>
            </div>
            <p id={str} className="button-text">{lan}</p>
          </button>
        </div>
    )
}
export default TimeLineButton;