import React from 'react';
import Aux from '../../Hoc/Aux';

let layout = (props) => {
  return (
    <Aux classes="red">
      <main>
        {props.children}
      </main>
    </Aux>
  )
}

export default layout;