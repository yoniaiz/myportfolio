import React, { Component } from "react";
import "../Styles/walking.css";
import Title from '../Components/Title'
import Line from "../Components/Line";
import FlyingStuff from '../Components/FlyingStuff'
import { Redirect } from "react-router-dom";
import TimeLineButton from '../Components/TimeLineButton'

class TimeLine extends Component {
    baloonPop =  (str) => {
        if(!str){
          str = '<h1> Hello World </h1>'
          let baloonPop = <div class="circular-sb">{str} <div class="circle3" /><div class="circle4" /></div>
          setTimeout(() => {
              this.setState({baloonPop})
          }, 1500);
          setTimeout(() => {
              this.setState({baloonPop:null})
          }, 3500); 
        }
        else{
          let baloonPop = <div class="circular-sb">{str} <div class="circle3" /><div class="circle4" /></div>
          this.setState({baloonPop})
          setTimeout(() => {
              this.setState({baloonPop:null})
          }, 2500);
       }
          
    }
  walkingMan = {
    walkingManStart: <div onClick={() => this.baloonPop('Stop it!')} className="me  start" />,
    walkingLeft: <div onClick={() => this.baloonPop('Stopppppp')} className="me walking left" />,
    walkingRight: <div onClick={() => this.baloonPop('Not funny!')} className="me walking" />,
    walkingRightStop: <div onClick={ () =>this.baloonPop('S:')} className="me" />,
    walkingLeftStop: <div  onClick={ () => this.baloonPop('ok...')} className="me left" />,
    leave: <div className="me left leave" />,
  };
  state = {
    walkingMan: this.walkingMan.walkingManStart,
    walk: true,
    scrollIndex:-200,
    baloonPop : null,
    redirect:false
  };

  
  keys = {37: 1, 38: 1, 39: 1, 40: 1};
  componentDidMount = () => {
    this.disableScroll()
    window.addEventListener("wheel", this.listener);
    this.baloonPop()

  };

  listener = async e => {
    if (e.deltaY < 0) {
      this.walkLeft();
    } else if (e.deltaY > 0) {
      this.walkRight();
    } 
  }
  preventDefault = (e) => {
    e = e || window.event;
    if (e.preventDefault)
        e.preventDefault();
    e.returnValue = false;  
  }
  
  preventDefaultForScrollKeys = (e) => {
      if (this.keys[e.keyCode]) {
        this.preventDefault(e);
          return false;
      }
  }
  
  disableScroll = (e) => {
    window.addEventListener('DOMMouseScroll', this.preventDefault, false);
    document.addEventListener('wheel', this.preventDefault, {passive: false}); // Disable scrolling in Chrome
    window.onwheel = this.preventDefault; // modern standard
    window.onmousewheel = document.onmousewheel = this.preventDefault; // older browsers, IE
    window.ontouchmove  = this.preventDefault; // mobile
    document.onkeydown  = this.preventDefaultForScrollKeys;
  }
  
 enableScroll = () => {
      window.removeEventListener('DOMMouseScroll', this.preventDefault, false);
      document.removeEventListener('wheel', this.preventDefault, {passive: false}); // Enable scrolling in Chrome
      window.onmousewheel = document.onmousewheel = null; 
      window.onwheel = null; 
      window.ontouchmove = null;  
      document.onkeydown = null;  
  }
  
  walkRight = async () => {
    let scrollIndex = this.state.scrollIndex
    if(scrollIndex<5000)
        scrollIndex+=17.5
    await this.setState({ walkingMan: this.walkingMan.walkingRight });
    if (this.state.walk) {
      await this.setState({ walk: false });
      setTimeout(async () => {
        await this.setState({
          walkingMan: this.walkingMan.walkingRightStop,
          walk: true
        });
      }, 1000);
    }
    await this.setState({scrollIndex})
  };
  walkLeft = async () => {
    let scrollIndex = this.state.scrollIndex
    if(scrollIndex>=-200)
       scrollIndex-=17.5
    this.setState({ walkingMan: this.walkingMan.walkingLeft });
    if (this.state.walk) {
      await this.setState({ walk: false });
      setTimeout(async () => {
        await this.setState({
          walkingMan: this.walkingMan.walkingLeftStop,
          walk: true
        });
      }, 1000);
    }
    await this.setState({scrollIndex})
  };

  goBack = async() => {
    this.enableScroll()
    await window.removeEventListener('wheel',this.listener,false)
    this.baloonPop('Bye!')
    setTimeout(() => {
       this.setState({walkingMan:this.walkingMan.leave})
    }, 1000);
    setTimeout(() => {
        this.setState({redirect:true})  
    }, 2500);
  }
  
  render() {
    if (this.state.redirect) {
      return <Redirect to='/'/>;
    }
    return (
      <div
        className="container-fluid m-0 p-0"
        style={{
          backgroundColor: "hsl(52, 56%, 87%)",
          backgroundSize: "cover",
          width: "135vw",
          height: "135vh",
          position:'absolute'
        }}
      >
        <Title></Title>
        <FlyingStuff></FlyingStuff>
        {this.state.baloonPop}
        {this.state.walkingMan}
        <Line move={this.state.scrollIndex} message={this.baloonPop}></Line>
        <TimeLineButton str='Back' goToTimeLine={this.goBack}></TimeLineButton>
      </div>
    );
  }
}
export default TimeLine;
