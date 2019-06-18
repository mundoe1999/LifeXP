import React, { Component } from 'react';

// Text in h1 and h4 will be replaced when backend is ready

const BoardCard = props => (
  <div className="BoardCard Card">
  	<h1>{props.id}</h1>
  	<h4>{props.body}</h4>
  </div>
);

export default BoardCard;