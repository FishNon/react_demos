import React from 'react';
import ReactDOM from 'react-dom';
import {observable, action} from "mobx";
import {observer} from "mobx-react";

var appState = observable({
    timer: 0
});

appState.resetTimer = action(function reset() {
    appState.timer = 0;
});

setInterval(action(function tick() {
    appState.timer++;
}), 1000);

@observer
class App extends React.Component {
    render() {
        return (
            <div className="App">

            </div>
        );
    }
}

export default App;
