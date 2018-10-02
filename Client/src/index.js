import './polyfill'
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// disable ServiceWorker
// import registerServiceWorker from './registerServiceWorker';
let user = {

    "id"		 : "E001",
    "username"   : "samith",
    "role"       : "Management"
            
}
localStorage.setItem('user', JSON.stringify(user));
ReactDOM.render(<App />, document.getElementById('root'));
// disable ServiceWorker
// registerServiceWorker();
