import React, { Component } from 'react';
import Burger from '../../components/Burger/Burger';
import classes from '../../assets/css/style.scss';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';


let INGREDIENT_PRICE = {
  salad: .5,
  bacon: .4,
  cheese: .7,
  meat: 1.3
}

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0      
    },
    totalPrice: 4
  }

  addIngredients = (type) => {
    let oldCount = this.state.ingredients[type];
    let updateConunt = oldCount + 1;
    let updateIngredients = {
      ...this.state.ingredients
    }
    updateIngredients[type] = updateConunt;
    let oldPrice = this.state.totalPrice;
    let priceAddition = INGREDIENT_PRICE[type];
    let newPrice = oldPrice + priceAddition;
    this.setState({
      totalPrice: newPrice,
      ingredients: updateIngredients
    })
  }

  removeIngredients = (type) => {
    let oldCount = this.state.ingredients[type];
    if (oldCount <= 0) {
      return;
    }
    let newCount = oldCount - 1;
    let updateIngredients = {
      ...this.state.ingredients
    };
    updateIngredients[type] = newCount;
    let oldPrice = this.state.totalPrice;
    let priceAddition = INGREDIENT_PRICE[type];
    let newPrice = oldPrice - priceAddition;
    this.setState({
      ingredients: updateIngredients,
      totalPrice: newPrice
    })
  }

  render() {

    let disabledInfo = {
      ...this.state.ingredients
    }
    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0
    }

    return (
      <div className={classes.burgerwraper}>
        <Burger ingredients={this.state.ingredients}/>
        <p className={classes.totalPrice}>Total Price is : {this.state.totalPrice.toFixed(2)}</p>
        <BuildControls 
            addIngredients={this.addIngredients} 
            removeIngredients={this.removeIngredients}
            disabledInfo={disabledInfo}
        />
      </div>
    );
  }
}

export default BurgerBuilder;
