import React from 'react';
import classes from '../../../assets/css/component/modal.scss';

let modal = (props) => {
  return (
    <div className={classes.Modal} style={{
      transform: props.show ? 'translateY(0)' : 'translateY(-100%)',
      opacity: props.show ? '1' : '0'
    }}>
      {props.children}
    </div>
  )
}

export default modal;