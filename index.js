import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Root from './pages/Root';
import registerServiceWorker from './registerServiceWorker';
import 'semantic-ui-css/semantic.min.css';

ReactDOM.render(<Root />, document.getElementById('root'));
registerServiceWorker();
