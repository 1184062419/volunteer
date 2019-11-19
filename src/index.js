import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {BrowserRouter,Route,Switch}from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import HomePage from './HomePage/homepage';
import LoginPage from './Login/login';

class IndexPage extends React.Component{
    render(){
        return(
            <div>
                <BrowserRouter>
                
                    <Route path="/homepage" component={HomePage}></Route>
                    <Route path="/login" component={LoginPage}></Route>
                </BrowserRouter>
            </div>
        )
    }
}

ReactDOM.render(<IndexPage/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
