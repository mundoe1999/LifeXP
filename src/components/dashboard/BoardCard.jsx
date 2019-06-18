import React, { Component } from 'react';

const BoardCard = props => (
  <div className="BoardCard Card">
  	<h1>{props.id}</h1>
  	<h4>{props.body}</h4>
  </div>
);

export default BoardCard;