import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../actions/fuelSavingsActions';
import FoosballGameForm from '../components/FoosballGameForm';

export const FoosballGamePage = (props) => {
  return (
    <FoosballGameForm
      saveFuelSavings={props.actions.saveFuelSavings}
      calculateFuelSavings={props.actions.calculateFuelSavings}
      appState={props.appState}
    />
  );
};

FoosballGamePage.propTypes = {
  actions: PropTypes.object.isRequired,
  appState: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    appState: state.fuelSavingsAppState
  };
}


function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FoosballGamePage);
