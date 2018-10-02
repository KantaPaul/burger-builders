import React from 'react';
import BurgerIngredient from './BurgerIngredients/BurgerIngredients';
import classes from '../../assets/css/style.scss'


let burger = (props) => {
  let transformIngredients = Object.keys(props.ingredients).map(ingredientKey => {
    return [...Array(props.ingredients[ingredientKey])].map((__, i) => {
      return <BurgerIngredient key={ingredientKey + i} type={ingredientKey} />
    })
  })
  return (
    <div className={classes.burger}>
      <BurgerIngredient type="bread-top"/>
      {transformIngredients}
      <BurgerIngredient type="bread-bottom"/>
    </div>
  )
}

export default burger;