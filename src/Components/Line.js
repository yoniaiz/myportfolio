import React from 'react';
import Image from './Image'
import {skillsObjects} from '../JSONs/skills'
import '../Styles/timeLine.css'
const Line = (props) => {
    const rightMargin = 350;
    return ( 
        <div className='timeLine'>
          <hr/>
          <div className='container'>
            {skillsObjects.map((skill,i) => {
              return <div className='ref'
                          style={{right:( String(props.move - (i*rightMargin)) +'px')}}
                          onClick = {() => props.message(skill.message)}>
                            <Image url={skill.url}
                                  icon={skill.icon}>
                            </Image>
                      </div>
              })}
          </div>
        </div>
    )
}
export default Line;