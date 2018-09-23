import React, { Component } from 'react'
import Aux from '../../Hoc/Aux';
import Burger from '../../Components/Burger/Burger';

export default class BurgerBuilder extends Component {
  state = {
    ingredients: {
      meat: 2,
      cheese: 2,
      bacon: 1,
      salad: 1
    }
  }
  render() {
    return (
      <Aux>
        <Burger ingredients={this.state.ingredients} />
      </Aux>
    )
  }
}
