// App.js
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as actions from '../store/actions';

class App extends Component {
  componentDidMount () {
    this.props.initialization();
  }
  render () {
    return (<div className="container"><h1> React !!! </h1></div>);
  }
}
export default connect(
  state => state,
  actions
)(App);

App.propTypes = {
  initialization: PropTypes.func,
};
