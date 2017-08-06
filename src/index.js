import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.css';

import Layout from './components/Layout/Layout';
import store from './redux/store';

ReactDOM.render(
  <Provider store={ store }>
    <Layout />
  </Provider>,
  document.getElementById('root')
);
