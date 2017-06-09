import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import store from './redux/store';
import Container from './components/Container/Container';
import './index.css';

ReactDOM.render(
  <Provider store={ store }>
    <Container />
  </Provider>,
  document.getElementById('root')
);
