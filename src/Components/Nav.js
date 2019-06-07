import React from 'react';
import '../Styles/Navbar.scss'
const Nav = (props) => {
    const resumeHead = (props.lan === 'en')?(props.resumeShow)?'Close':'Resume':(props.resumeShow)?'סגור':"קורות חיים"
    if(props.rasume)
        var rasume = <h1 className="logo" onClick={() => props.show()}><a href="#">{resumeHead}</a></h1>
    return (
        <header className="header p-0">
            <h1 className="logo"><a href="/">Portfolio</a></h1>
            {rasume}
        <ul className="main-nav">
                <li>
                    <a href="#" onClick={() => props.lang('en')}  style={{fontSize:'18px'}}>ENG</a>
                </li>
                <li>
                    <a href="#"  style={{fontSize:'18px'}}>;</a>
                </li>
                <li>
                    <a href="#" onClick={() => props.lang('he')} style={{fontSize:'18px'}}>HE</a>
                </li>
                <li>
                    <a  href="mailto:yoni29396@gmail.com"><img className='mail' alt='mail' src='/profilio/mail.png'/></a>
                </li>
        </ul>
        </header> 
    )
}
export default Nav;