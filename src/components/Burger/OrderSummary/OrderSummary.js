import React from 'react';

let orderSummary = (props) => {
  let ingredientSummary = Object.keys(props.ingredients).map(igKey => {
    return <li key={igKey} className="list-group-item list-group-item-action list-group-item-primary"><span style={{textTransform: 'capitalize'}}>{igKey}</span> : {props.ingredients[igKey]}</li>
  })
  return (
    <div>
      <h3>Your Order</h3>
      <p>A delicious burger</p>
      <ul className="list-group mb-2">
        {ingredientSummary}
      </ul>
      <p>Continue To Checkout</p>
    </div>
  )
}

export default orderSummary;