import React, { Component } from 'react';
import { BrowserRouter, Switch, Redirect } from 'react-router-dom';

import PublicRoute from './Component/util/PublicRoute'
import ProtectedRoute from './Component/util/ProtectedRoute'

import Home from './Component/ProtectedComponent/Home'
import CreatePost from './Component/ProtectedComponent/CreatePost'



import Login from './Component/PublicComponent/Login'
import Register from './Component/PublicComponent/Register'
import EditPost from './Component/ProtectedComponent/EditPost';

class App extends Component {
    render() { 
        return (
            <BrowserRouter>
                <Switch>
                    <ProtectedRoute path="/home" component={Home} />
                    <ProtectedRoute path="/create-post" component={CreatePost} />
                    <ProtectedRoute path="/edit-post" component={EditPost} />





                    <PublicRoute  path='/login' component={Login}/>
                    <PublicRoute  path='/register' component={Register}/>
                    <Redirect from="/" to="/home"/>
                </Switch>
            </BrowserRouter>
        );
    }
}
 
export default App;