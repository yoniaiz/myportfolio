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
        this.clear(mymove.name)
        this.flyingObject(mymove.name)
    }  
  }

  update = async (str,x,y) => {
    switch (str){
        case 'cloud':
            await this.setState({cloud:<Stuff obj={str} right={x} top={y}></Stuff>})
            break
        case 'h1':
            await this.setState({h1:<Stuff obj={str} right={x} top={y}></Stuff>})
            break
        case 'const':
                await this.setState({const:<Stuff obj={str} right={x} top={y}></Stuff>})
            break
        case 'a':
                await this.setState({a:<Stuff obj={str} right={x} top={y}></Stuff>})
            break
        case 'error':
                await this.setState({error:<Stuff obj={str} right={x} top={y}></Stuff>})
            break
        case 'consolelog':
                await this.setState({consolelog:<Stuff obj={str} right={x} top={y}></Stuff>})
            break
        case 'div':
                await this.setState({div:<Stuff obj={str} right={x} top={y}></Stuff>})
            break
        default:
                await this.setState({dot:<Stuff obj={str} right={x} top={y}></Stuff>})
  }
}
  clear = async (str) => {
    switch (str){
        case 'cloud':
            await this.setState({cloud:null})
            break
        case 'h1':
            await this.setState({h1:null})
            break
        case 'const':
            await this.setState({const:null})
            break
        case 'a':
            await this.setState({a:null})
            break
        case 'error':
            await this.setState({error:null})
            break
        case 'consolelog':
            await this.setState({consolelog:null})  
            break
        case 'div':
            await this.setState({div:null})
            break
        default:
            await this.setState({dot:null})
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
