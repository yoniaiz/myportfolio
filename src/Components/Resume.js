import React from 'react';
import '../Styles/resume.css'
const Resume = (props) => {
    const resume = (props.lan==='en')? 'resume': 'resumeHe'
    const title = (props.lan==='en')?<h1 className="title" >Yonatan Aizenshtein</h1>:<h1 className="title he" dir="rtl">יונתן איזנשטיין</h1>
    const address = (props.lan==='en')?<h5 className='semiTitle'>yoni29396@gmail.com</h5>:<h5 className='semiTitle he' >yoni29396@gmail.com</h5>
    const mail = (props.lan==='en')?<h5 className='semiTitle'>Karmiel , Israel</h5>:<h5 className='semiTitle he' dir="rtl">כרמיאל , ישראל</h5>
    const head1 = (props.lan==='en')? <div className="head">Education</div>:<div className='head he' dir="rtl">השכלה</div>
    const eduInfo1 = (props.lan==='en')? <p className='info' >2018-Present </p>:<p className='info he' dir="rtl">2018 - היום</p>
    const eduContant1 = (props.lan==='en')? <p className='info' > Fullstack WEB Developer Student - John Bryce, Haifa </p>:<p className='info he' dir="rtl">fullstack WEB developer student  - ג'ון ברייס – חיפה.</p>
    const eduInfo2 = (props.lan==='en')? <p className='info' >2019-Present </p>:<p className='info he' dir="rtl">2019 - היום</p>
    const eduContant2 = (props.lan==='en')? <p className='info' > B.Sc. , Computer Science Student - The Open University of Israel </p>:<p className='info he' dir="rtl">סטודנט למדעי המחשב  (B.Sc)  - האוניברסיטה הפתוחה.</p>
    const head2 = (props.lan==='en')? <div className="head">Skills</div>:<div className='head he' dir="rtl">יכולות    וטכנולוגיות</div>
    const head3 = (props.lan==='en')? <div className="head">Work Experience</div>:<div className='head he' dir="rtl">ניסיון תעסוקתי</div>
    const workEx1 = (props.lan==='en')? <p className='info' >2017-Present </p>:<p className='info he' dir="rtl">2017 - היום</p>
    const workExContant1 = (props.lan==='en')? <p className='info' > Security Shift Manager - securied facility <ul><li className='' >managed up to 30 guards for shift</li></ul> </p>:<p className='info he' dir="rtl">אחמש אבטחה פיזית – מתקן בטחוני. <ul><li className='he' dir="rtl"> אחראי על משמרות של עד ל30 איש.</li></ul></p>
    const workEx2 = (props.lan==='en')? <p className='info' >2014-2017 </p>:<p className='info he' dir="rtl">2017 - 2014</p>
    const workExContant2 = (props.lan==='en')? <p className='info' > Full Military Service - Border police Served at jerualem as a commander and medic. </p>:<p className='info he' dir="rtl">שירות צבאי מלא במשמר הגבול ירושלים,  מפקד וחובש.</p>
    return (
        <div className="container-fluid containerResume pb-2 ">
        {title}
        <hr/>
        {address}
        {mail}
        <hr/>
        <div id={resume}>
        {head1}
            <div className='section'>
                {eduInfo1}
                {eduContant1}
            </div>
            <div className='section'>
                {eduInfo2}
                {eduContant2}
            </div>
            <hr/>
            {head2}
            <ul className='skills mt-2'>
                <li>Fullstack front-end - HTML , Css , Java-script , Jequery , Bootsrap , React , Angular , MySql , NodeJs </li>
                <li>Graphic programs - Photoshop , illustrator </li>
                <li >Other programing languages - java , c# </li>
            </ul>
            <hr/>
            {head3}
            <div className='section'>
                {workEx1}
                {workExContant1}
            </div>
            <div className='section'>
                {workEx2}
                {workExContant2}
            </div>
        </div>
        </div>
    )
}
export default Resume