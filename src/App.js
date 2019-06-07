import React from 'react';
import Main from './Pages/MainPage'
import TimeLine from './Pages/TimeLine'
import {BrowserRouter, Route} from 'react-router-dom';
const App = () => {
      return (
        <BrowserRouter>
        <Route path='/' exact component={Main}/>
        <Route path='/timeLine' component={TimeLine}/>
        </BrowserRouter>
    )
};

export default App;