import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Typography from 'typography';
import lawtonTheme from 'typography-theme-lawton';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const typography = new Typography(lawtonTheme);

typography.injectStyles();

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
