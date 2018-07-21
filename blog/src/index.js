import React from 'react';
import ReactDOM from 'react-dom';
import Popup from 'react-popup';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<Popup />,document.getElementById('popupContainer'));

registerServiceWorker();
