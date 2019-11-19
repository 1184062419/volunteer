import React from 'react';

var HeaderCss = require('./header.css');
export default class Header extends React.Component{
    render(){
        return(
            <div className={HeaderCss.header}>
                zhelishi toubu
            </div>
        )
    }
}