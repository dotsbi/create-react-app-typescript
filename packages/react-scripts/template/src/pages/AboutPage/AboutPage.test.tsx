import * as React from 'react';
import * as ReactDom from 'react-dom';
import AboutPage from './AboutPage';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDom.render(<AboutPage />, div);
  ReactDom.unmountComponentAtNode(div);
});
