import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchBoards } from '../../actions/boardActions';

const BoardCard = props => (
  <div className="BoardCard Card">
  	<h1>This is a board!</h1>
  	<h4>This is the description of a board! uwu</h4>
  </div>
);

export default BoardCard;