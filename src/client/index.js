import React from 'react';
import ReactDOM from 'react-dom';
import 'babel-polyfill';

const App = () => (
  <div>
    Welcome to React, Webpack4, Mobx, Express starter kit.
  </div>
);

ReactDOM.render(<App />, document.getElementById('root'));

export default App;
