import React from 'react'
const Stuff = (props) => {
    var str={
        h1:'<h1>',
        a:'</a>',
        consol:'console.log()',
        div:'<div>',
        dot:';'
      }
    var retDiv=null;  
    var style= {right:String(props.right)+"px",top:String(props.top)+'px'}
    var  stuff = {
        cloud:<div style={style} className="cloud"><i class="fas fa-cloud"></i></div>,
        h1:<div style={style} className='myh1'>{str.h1}</div>,
        const:<div style={style} className='myh1'>const</div>,
        a:<div style={style} className='myh1'>{str.a}</div>,
        error:<div style={style} className='myh1'>error</div>,
        consolelog:<div className='myh1' style={style}>{str.consol}</div>,
        div:<div className='myh1' style={style}>{str.div}</div>,
        dot:<div className='myh1' style={style}>{str.dot}</div>,
    }
    switch (props.obj){
        case 'cloud':
            retDiv = stuff.cloud
            break
        case 'h1':
            retDiv = stuff.h1
            break
        case 'const':
            retDiv = stuff.const
            break
        case 'a':
            retDiv = stuff.a
            break
        case 'error':
            retDiv = stuff.error
            break
        case 'consolelog':
            retDiv = stuff.consolelog
            break
        case 'div':
            retDiv = stuff.div
            break
        default:
            retDiv = stuff.dot
    }
    return (
        <div>{retDiv}</div>
    )
}
export default Stuff