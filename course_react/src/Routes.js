import React from 'react';
import {Route,Switch} from 'react-router-dom';
import LoginChannel from './content/Login/Loginchannel';
export default ()=>(
<Switch>
    <Route exact path='/' component={LoginChannel}/>
</Switch>
)
