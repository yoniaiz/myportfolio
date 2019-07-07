import React from 'react';
import Image from './Image'
import {skillsObjects} from '../JSONs/skills'
import '../Styles/timeLine.css'
const Line = (props) => {
    const rightMargin = 350;
    return ( 
        <div className='container-fluid timeLine p-0 m-0'>
            <hr/>
          <div className='container-fluid lineCon p-0 m-0'>
            {skillsObjects.map((skill,i) => {
              return <div className='ref p-0 m-0'
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