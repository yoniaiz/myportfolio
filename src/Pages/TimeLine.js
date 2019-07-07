import React, { Component } from "react";
import "../Styles/walking.css";
import Title from '../Components/Title'
import Line from "../Components/Line";
import FlyingStuff from '../Components/FlyingStuff'
import { Redirect } from "react-router-dom";
import TimeLineButton from '../Components/TimeLineButton'

class TimeLine extends Component {
    noScroll = require('no-scroll');
    
    baloonPop =  (str) => {
        if(!str){
          str = 'Hello World! scroll up and down to walk and click on icons!'
          let baloonPop = <div class="circular-sb intro">{str} <div class="circle3" /><div class="circle4" /></div>
          setTimeout(() => {
              this.setState({baloonPop})
          }, 1500);
          setTimeout(() => {
              this.setState({baloonPop:null})
              str = 'Or click on the side of the screen you want to walk (for phone users)'
          let baloonPop = <div class="circular-sb intro">{str} <div class="circle3" /><div class="circle4" /></div>
          setTimeout(() => {
              this.setState({baloonPop})
          }, 200);
          setTimeout(() => {
              this.setState({baloonPop:null})
          }, 4600); 
          }, 6500); 
          
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
    var myVar = setInterval(() => this.slideIn(this.state.scrollIndex,myVar,1500), 0.01);
    this.noScroll.on()
    window.addEventListener("wheel", this.listener);
    this.baloonPop()
    window.addEventListener('click', (e) => {
      var w = document.innerWidth
      || document.documentElement.clientWidth
      || document.body.clientWidth;      
      var y = document.innerHeight
      || document.documentElement.clientHeight
      || document.body.clientHeight; 
      var clickX = e.clientX;
      var clickY = e.clientY;
      if (clickX > w/2 && clickY < y/2) {
        let scroll = this.state.scrollIndex
        var myVar = setInterval(() => this.slideIn(this.state.scrollIndex,myVar,(scroll+300)), 0.1);
          this.walkRight();
      } else if(clickX < w/2 && clickY < y/2) {
        let scroll = this.state.scrollIndex
        var myVar = setInterval(() => this.slideOut(this.state.scrollIndex,myVar,(scroll-300)), 0.1);
          this.walkLeft();
      }
  });

  };
  
  
  slideIn = async(move,myVar,num) => {
    let mymove=move
    if(this.state.scrollIndex<num){
        mymove+=2
        await this.setState({scrollIndex:mymove})
    }
    else{
        clearInterval(myVar)
    }  
  }
  slideOut = async(move,myVar,num) => {
    let mymove=move
    if(this.state.scrollIndex>num){
        mymove-=2
        await this.setState({scrollIndex:mymove})
    }
    else{
        clearInterval(myVar)
    }  
  }

  listener = async e => {
    if (e.deltaY < 0) {
      this.walkLeft();
    } else if (e.deltaY > 0) {
      this.walkRight();
    } 
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
        <div className="container-fluid p-0 m-0" style={{height:'100vh',width:'100vw',textAlign:'center'}}>
          <div className='touch tLeft' ><i class="fas fa-fingerprint"><span className='scrollDownText'>Touch to go left</span></i></div>
          <div className='touch tRight' ><i class="fas fa-fingerprint"><span className='scrollDownText'>Touch to go right</span></i></div>
          <Title></Title>
          <FlyingStuff></FlyingStuff>
          <div className="container-fluid" style={{height:'90vh',width:'100%',textAlign:'center'}}>
            <div className="container-fluid manAndLineCon">
              <div className="container manCon">     
                {this.state.walkingMan}
                {this.state.baloonPop}
              </div>
              <Line move={this.state.scrollIndex} message={this.baloonPop}></Line>
            </div>     
            <footer className='container-fluid buttonCon'  style={{width:'100vw',textAlign:'center'}}>
             <TimeLineButton str='Back' goToTimeLine={this.goBack}></TimeLineButton>
            </footer>    
           </div>
           
        </div>
      </div>
    );
  }
}
export default TimeLine;
