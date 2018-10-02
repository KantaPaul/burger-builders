import React, { Component } from 'react';
import classes from '../../assets/css/style.scss';

class Layout extends Component {
  render() {
    return (
      <div className={classes.bgRed}>
        <div>Toolbar, Sidebar, Backdrop</div>
        <main>
          {this.props.children}
        </main>
      </div>
    );
  }
}

export default Layout;
