import React from 'react';
import PropTypes from 'prop-types';

import Store from 'Store';

import ReactDOM from 'react-dom';
import 'babel-polyfill';

import Information from 'Components/PersonInformation';

const instance = new Store();

const App = ({ store }) => (
  <div>
    Welcome to React, Webpack4, Mobx, Express starter kit.
    <Information person={store.person} />
  </div>
);

App.propTypes = {
  store: PropTypes.instanceOf(Store).isRequired,
};

ReactDOM.render(<App store={instance} />, document.getElementById('root'));

export default App;
