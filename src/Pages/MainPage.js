import React, {Component} from 'react';
import Nav from '../Components/Nav'
import TimeLineButton from '../Components/TimeLineButton'
import Resume from '../Components/Resume'
import { Redirect } from "react-router-dom";
import '../Styles/main.css'
class MainPage extends Component {
    noScroll = require('no-scroll');
    // main image possibilties and classes.
    mainImage = { 
        mainImageEnter : <img className='mainImage enterImage' src='/profilio/mainpageTamplate.png' alt='main' ></img>,
        mainImageOut :   <img className='mainImage exitImage' src='/profilio/mainpageTamplate.png' alt='eand' ></img>
    }
    // box image possibilties and classes.
    box = {
        boxEnter : <img className='box enter' src='/profilio/rightBox.png' alt='main' ></img>,
        boxExit : <img className='box exit' src='/profilio/rightBox.png' alt='main' ></img>,
        boxNextPage : <img className='box next' src='/profilio/rightBox.png' alt='main' ></img>
    }

    state = {
        lan:'en', //language
        mainImage : this.mainImage.mainImageEnter, //main image display
        endImage : null, // main image on exit
        box: this.box.boxEnter, // white box from left
        endBox:null, // end of white box from left
        intro:null, // hello my name is yonatan div
        intro2:null,// im a fullstack dealoper div
        showButton:null, // button to next page show or hide
        exit:false, // if the page is on exit
        enter:false, // if the page is on enter
        resumeShow:false, // show or hide resume
        resume:null, // redume display
        engAnim:false, // if english version was displayed
        hebAnim:false, // if hebrew version was displayed
        redirect:false
    }

    messages = {
        introStr : 'My name is Yonatan Aizenshtein.',
        introStr2 : 'Im a fullstack web student.'
    }
    // intro str possibilties and classes.
    intro = {
        intoStart : <h1 className='typewriter inType typing '>{this.messages.introStr}</h1>,
        intoStartend : <h1 className='typewriter'>{this.messages.introStr}</h1>,
        intoStart2 : <h1 className='typewriter inType second typing '>{this.messages.introStr2}</h1>,
        introEnd :  <h1 className='typewriter erase '>{this.messages.introStr}</h1>,
        introEnd2 :  <h1 className='typewriter second erase '>{this.messages.introStr2}</h1>,
        intoStarted2 : <h1 className='typewriter starder2'>{this.messages.introStr2}</h1>,
    }
    keys = {37: 1, 38: 1, 39: 1, 40: 1};
    componentDidMount = () =>{ 
         this.noScroll.on()
         window.addEventListener('wheel',this.listener);

         this.swipedetect(window, (swipedir) => {
            // swipedir contains either "none", "left", "right", "top", or "down"
            console.log(swipedir)
            if(!this.state.resumeShow){
            if(swipedir === 'up')
            this.exitImage()   
            if(swipedir === 'down')
            this.enterImage()
            }
         });
       }

    /***********Swipe detece for phone***********/   
    swipedetect = (el, callback) => {
        var touchsurface = el,
        swipedir,
        startX,
        startY,
        distX,
        distY,
        threshold = 150, //required min distance traveled to be considered swipe
        restraint = 100, // maximum distance allowed at the same time in perpendicular direction
        allowedTime = 300, // maximum time allowed to travel that distance
        elapsedTime,
        startTime,
        handleswipe = callback || function(swipedir){}
      
        touchsurface.addEventListener('touchstart', (e) =>{
            var touchobj = e.changedTouches[0]
            swipedir = 'none'
            startX = touchobj.pageX
            startY = touchobj.pageY
            startTime = new Date().getTime() // record time when finger first makes contact with surface
        }, false)
      
      
        touchsurface.addEventListener('touchend', (e) =>{
            var touchobj = e.changedTouches[0]
            distX = touchobj.pageX - startX // get horizontal dist traveled by finger while in contact with surface
            distY = touchobj.pageY - startY // get vertical dist traveled by finger while in contact with surface
            elapsedTime = new Date().getTime() - startTime // get time elapsed
            if (elapsedTime <= allowedTime){ // first condition for awipe met
                 if (Math.abs(distY) >= threshold && Math.abs(distX) <= restraint){ // 2nd condition for vertical swipe met
                    swipedir = (distY < 0)? 'up' : 'down' // if dist traveled is negative, it indicates up swipe
                }
            }
            handleswipe(swipedir)
        }, false)
    }
    /***********Swipe detece for phone***********/ 


       //listener to scroll
       listener = (e) => {
            if (e.deltaY < 0) {
                this.enterImage()
            }
            if (e.deltaY > 0) {
                this.exitImage()
            }     
    }
   

    enterImage  = () => {
        if(!this.state.enter){
            this.setState({enter:true})
            this.setState({rasume:false})
            this.setState({mainImage: this.mainImage.mainImageEnter});
            this.setState({endImage : null})
            this.setState({box : this.box.boxEnter})
            this.setState({endBox :null})
            this.setState({intro2:this.intro.introEnd2})
            setTimeout(() => {this.setState({intro:this.intro.introEnd})
            this.setState({intro:null , intro2:null})
            },1500)
            this.setState({showButton:null})
            this.setState({exit:false})
        }
    }

    exitImage = () => {
        if(!this.state.exit){
        this.setState({exit:true})
        this.setState({rasume:true})
        this.setState({mainImage: null});
        this.setState({endImage : this.mainImage.mainImageOut})
        this.setState({box :null})
        this.setState({endBox : this.box.boxExit})
        this.writing()
        setTimeout(() => {
            this.setState({endImage : null})
            this.setState({endBox : null})
        },3000)
        this.setState({showButton:<TimeLineButton lan={this.state.lan} goToTimeLine={this.goToTimeLine}></TimeLineButton>})
     }
    }

    writing = () => {
        if(this.state.mainImage == null){
            if(!this.state.resumeShow){
                if(!this.state.engAnim && this.state.lan === 'en'){
                    this.writeText()
                    this.setState({engAnim:true})
                }
                else if (!this.state.hebAnim && this.state.lan === 'he'){
                    this.writeText()
                    this.setState({hebAnim:true})
                }
                else {
                    this.setState({intro:this.intro.intoStartend})
                    this.setState({intro2:this.intro.intoStarted2})
                }
                this.setState({enter:false})
            }
        }
    }
    writeText = () => {
        setTimeout(async ()=> {
            await this.setState({intro : this.intro.intoStart})
            setTimeout(() => {this.setState({intro: this.intro.intoStartend})},3700)
            },1000) 
            setTimeout(()=>{this.setState({intro2 : this.intro.intoStart2})
            },4550)     
    }
    
    lang = async (lan) => {
        await this.setState({lan})
        this.messages = {
            introStr : (this.state.lan === 'en')?'My name is Yonatan Aizenshtein':' קוראים לי יוני איזנשטיין ',
            introStr2 : (this.state.lan === 'en')?'Im a fullstack web student':'  אני תלמיד פול-סטאק ווב'
        }
        this.intro = {
            intoStart : (this.state.lan === 'en')?<h1 className='typewriter inType typing '>{this.messages.introStr}</h1>:<h1 className='typewriter inTypeHe typingHe he' dir="rtl">{this.messages.introStr}</h1>,
            intoStartend : (this.state.lan === 'en')?<h1 className='typewriter'>{this.messages.introStr}</h1>:<h1 className='typewriter he'dir="rtl">{this.messages.introStr}</h1>,
            intoStart2 : (this.state.lan === 'en')?<h1 className='typewriter inType second typing '>{this.messages.introStr2}</h1>:<h1 className='typewriter inTypeHe second typingHe he' dir="rtl">{this.messages.introStr2}</h1>,
            introEnd : (this.state.lan === 'en')? <h1 className='typewriter erase '>{this.messages.introStr}</h1>:<h1 className='typewriter eraseHe he' dir="rtl">{this.messages.introStr}</h1>,
            introEnd2 :  (this.state.lan === 'en')?<h1 className='typewriter second erase '>{this.messages.introStr2}</h1>:<h1 className='typewriter second eraseHe he' dir="rtl">{this.messages.introStr2}</h1>,
            intoStarted2 : (this.state.lan === 'en')?<h1 className='typewriter starder2 '>{this.messages.introStr2}</h1>:<h1 className='typewriter starder2 he' dir="rtl">{this.messages.introStr2}</h1>,
        }
        await this.setState({intro:null,intro2:null})
        this.writing();
        if(this.state.resume != null)
         this.setState({resume:<Resume lan={this.state.lan}></Resume>})
        else
        this.setState({showButton:<TimeLineButton lan={this.state.lan} goToTimeLine={this.goToTimeLine}></TimeLineButton>})
    }

    showRasume = async () => {
        if(!this.state.resumeShow){
            this.noScroll.off()
            await window.removeEventListener('wheel',this.listener,false)
            this.setState({resumeShow:true})
            this.setState({intro:null , intro2:null})
            this.setState({showButton:null})
            this.setState({resume:<Resume lan={this.state.lan}></Resume>})
       }
       else{
           this.noScroll.on()
           this.setState({showButton:<TimeLineButton  lan={this.state.lan} goToTimeLine={this.goToTimeLine}></TimeLineButton>})
           this.setState({intro:this.intro.intoStartend})
           this.setState({intro2:this.intro.intoStarted2})
           this.setState({resumeShow:false})
           this.setState({resume:null})
           this.componentDidMount()
       }
    }

    goToTimeLine = async () => {
        await window.removeEventListener('wheel',this.listener,false)
        await this.setState({intro:null,intro2:null,resume:null,mainImage:null})
        await this.setState({box:this.box.boxNextPage})
        setTimeout(() => {
            this.setState({redirect:true})  
        }, 1000);
    }

    render() {
        if (this.state.redirect) {
            return <Redirect to='/timeLine'/>;
         }
        return (
            <div className='m-0 p-0' style = {{backgroundColor: 'hsl(22, 56%, 87%)',backgroundSize:'cover',width: '100vw',height: '100vh',}} >
                <Nav lang={this.lang} lan = {this.state.lan} rasume={this.state.rasume} show={this.showRasume} resumeShow={this.state.resumeShow}></Nav>
                <div className='container-fluid' style={{textAlign:'center'}}><i className="scroll fas fa-chevron-down" > <span className='scrollDownText'>Scroll down!</span> </i></div>
                {this.state.resume}
                {this.state.mainImage}
                {this.state.endImage}
                {this.state.box}
                {this.state.endBox}
                <div className="container-fluid" style={{height:'80%',width:'90vw',textAlign:'center'}}>
                    <div className='container-fluid typewriterCon'>
                        {this.state.intro}
                        {this.state.intro2}    
                    </div>
                    {this.state.showButton}  
                </div>
                
            </div>
        )
    }
}
export default MainPage;

