import React from 'react';

let buildControl = (props) => {
  return (
    <div className="card-body align-self-center">
      <span className="mr-2">{props.label}</span>
      <button onClick={props.added} className="btn btn-primary mr-2">More</button>
      <button onClick={props.removed} className="btn btn-danger" disabled={props.disabled}>Less</button>
    </div>
  )
}

export default buildControl;