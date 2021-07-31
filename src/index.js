import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';


//Route
import Router from './router'

const App = () => {
    return <Router />
}
ReactDOM.render(<App />, document.querySelector('#root'))