import React, {PropTypes} from 'react';
import FuelSavingsResults from './FuelSavingsResults';
import PlayerNameTextInput from './PlayerNameTextInput';

class FoosballGameForm extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.save = this.save.bind(this);
    this.onTimeframeChange = this.onTimeframeChange.bind(this);
    this.fuelSavingsKeypress = this.fuelSavingsKeypress.bind(this);
  }

  onTimeframeChange(e) {
    this.props.calculateFuelSavings(this.props.appState, 'milesDrivenTimeframe', e.target.value);
  }

  fuelSavingsKeypress(name, value) {
    this.props.calculateFuelSavings(this.props.appState, name, value);
  }

  save() {
    this.props.saveFuelSavings(this.props.appState);
  }

  render() {
    const {appState} = this.props;
    const {players} = appState.leagues.find(league => league.league ==='ATS');

    return (
      <div>
        <h2>New Foosball Game</h2>
        <div className="teamRed">
          <label htmlFor="redPlayer1">Player1</label>
          <PlayerNameTextInput name="redPlayer1" value={players}/>
          <label htmlFor="redPlayer2">Player2</label>
          <PlayerNameTextInput name="redPlayer2" value={players}/>
        </div>
        <hr/>
        <div className="teamBlue">
          <label htmlFor="bluePlayer1">Player1</label>
          <PlayerNameTextInput name="bluePlayer1" value={players}/>
          <label htmlFor="bluePlayer2">Player2</label>
          <PlayerNameTextInput name="bluePlayer2" value={players}/>
        </div>

        {appState.necessaryDataIsProvidedToCalculateSavings && <FuelSavingsResults savings={appState.savings}/>}
        <input type="submit" value="Save" onClick={this.save}/>
      </div>
    );
  }
}

FoosballGameForm.propTypes = {
  saveFuelSavings: PropTypes.func.isRequired,
  calculateFuelSavings: PropTypes.func.isRequired,
  appState: PropTypes.object.isRequired
};

export default FoosballGameForm;
