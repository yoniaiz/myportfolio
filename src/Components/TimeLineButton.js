import React from 'react';
import '../Styles/TimeLineButton.scss'
const TimeLineButton = (props) => {
    const str = (props.str)?'Back':(props.lan === 'en')?'To timeLine':'לציר הזמן'
    const btn = (props.str)?'btn1':'btn'
    return ( 
        <div id={btn} className={str}>
          <button className=" button learn-more" onClick={props.goToTimeLine}>
            <div className="circle">
              <span className="icon arrow"></span>
            </div>
            <p id={str} className="button-text">{str}</p>
          </button>
        </div>
    )
}
export default TimeLineButton;