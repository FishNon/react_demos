import React, {Component} from 'react';
import {observable, action} from "mobx";
import {observer} from "mobx-react";
import logo from './logo.svg';
import './App.css';

var appState = observable({
    timer: 0
});

appState.resetTimer = action(function reset() {
    appState.timer = 0;
});

setInterval(action(function tick() {
    appState.timer++;
}),1000);

@observer
class App extends Component {
    render() {
        return (
            <button onClick={this.onReset.bind(this)}>Seconds passed : {this.props.appState.timer}</button>
        );
    }
    onReset(){
        this.props.appState.reserTimer();
    }
}


export {App,appState};
