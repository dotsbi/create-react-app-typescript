import * as React from 'react';
import * as ReactDom from 'react-dom';
import App from './App';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

ReactDom.render(<App pathname={location.pathname} />, document.getElementById(
  'root'
) as HTMLElement);
registerServiceWorker();
