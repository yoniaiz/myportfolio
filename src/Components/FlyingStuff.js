import React, { Component } from "react";
import Stuff from './Stuff'
import '../Styles/flying.css'
class FlyingStuff extends Component {

  componentDidMount() {
    this.flyingObject('cloud')
    setTimeout(() => {
        this.insertObj('h1')
    }, 2000);
    setTimeout(() => {
        this.insertObj('const')
    }, 6000);
    setTimeout(() => {
        this.insertObj('a')
    }, 15000);
    setTimeout(() => {
        this.insertObj('error')  
    }, 21000);
    setTimeout(() => {
        this.insertObj('consolelog') 
    }, 25000);
    setTimeout(() => {
        this.insertObj('div')  
    }, 30000);
    
    this.insertObj('dot')
  }
  insertObj = (str) => {
      setTimeout(() => {
        this.flyingObject(str) 
      }, Math.floor(Math.random()*10000)+2000);
  }
  state={
      cloud:null,
      h1:null,
      const:null,
      a:null,
      error:null,
      consolelog:null,
      div:null,
      dot:null
  }

  flyingObject = async (obj) => {
    let y = Math.floor((Math.random() * 300) + 1)  
    var move = {}
     move = {name:obj,x:0,y}
    var myVar = setInterval(() => this.fly(move,myVar), 30);
        
  }
  
  fly = async(move,myVar) => {
    let mymove=move
    if(mymove.x<2100){
        this.update(mymove.name,mymove.x,mymove.y)
        mymove.x+=1
    }
    else{
        clearInterval(myVar)
        this.update(null)
        this.flyingObject(mymove.name)
    }  
  }

  update = async (str,x,y) => {
    let myUpdate = (str)?<Stuff obj={str} right={x} top={y}></Stuff>:null;
    switch (str){
        case 'cloud':
            await this.setState({cloud:myUpdate})
            break
        case 'h1':
            await this.setState({h1:myUpdate})
            break
        case 'const':
                await this.setState({const:myUpdate})
            break
        case 'a':
                await this.setState({a:myUpdate})
            break
        case 'error':
                await this.setState({error:myUpdate})
            break
        case 'consolelog':
                await this.setState({consolelog:myUpdate})
            break
        case 'div':
                await this.setState({div:myUpdate})
            break
        default:
                await this.setState({dot:myUpdate})
  }
}

  render() {
    
    return (
        <div>
            {this.state.cloud}
            {this.state.h1}
            {this.state.const}
            {this.state.a}
            {this.state.consolelog}
            {this.state.dot}
            {this.state.error}
        </div>
    )
     
  }
}
export default FlyingStuff;
