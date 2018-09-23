import React from 'react';
import classes from './Burger.css'
import BurgerIngredient from './BurgerIngredients/BurgerIngredients';

let burger = (props) => {
  let transformedIngredients = Object.keys(props.ingredients).map((igKey) => {
    // console.log('igKey', igKey)
    // console.log('i', i)
    return [...Array(props.ingredients[igKey])].map((__, index) => {
      return <BurgerIngredient key={igKey + index} type={igKey} />
    })
  })

  return (
    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top" />
      {transformedIngredients}
      <BurgerIngredient type="bread-bottom" />
    </div>
  )
}

export default burger;