import React, { Component } from 'react';
import Burger from '../../components/Burger/Burger';
import classes from '../../assets/css/style.scss';

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 3,
      cheese: 2,
      meat: 2,
      bacon: 2
    }
  }
  render() {
    return (
      <div className={classes.burgerwraper}>
        <Burger ingredients={this.state.ingredients}/>
        <p>Build Controls</p>
      </div>
    );
  }
}

export default BurgerBuilder;
