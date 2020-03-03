import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router } from 'react-router-dom';
import Routes from './routes/index';
import { Provider } from 'react-redux';
import { store } from './store';
import './styles/main.scss';

const App = () => (
  <Provider store={store}>
    <Router>
      <Routes />
    </Router>
  </Provider>
);

ReactDOM.render(<App />, document.getElementById('root'));
