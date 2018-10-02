import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Layout from './components/Layout/layout';
import BurgerBuilder from './Containers/BurgerBuilder/BurgerBuilder';
import classes from './assets/css/style.scss'

class App extends Component {
  render() {
    return (
      <div className={classes.red}>
        <Layout />
        <BurgerBuilder />
      </div>
    );
  }
}

export default App;

let app = document.getElementById('app');

ReactDOM.render(<App />, app);
