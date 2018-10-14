import React from 'react';
import classes from '../../../assets/css/style.scss';
import Backdrop from '../Backdrop/Backdrop';

let modal = (props) => {
  return (
    <div>
      <Backdrop show={props.show} clicked={props.modalClosed} />
      <div className={classes.Modal} style={{
        transform: props.show ? 'translateY(0)' : 'translateY(-100%)',
        opacity: props.show ? '1' : '0',
        visibility: props.show ? 'visible' : 'hidden'
      }}>
        {props.children}
      </div>
    </div>
  )
}

export default modal;