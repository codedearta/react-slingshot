import React, {PropTypes} from 'react';

const PlayerNameTextInput = (props) => {
  const handleChange = (e) => {
    props.onChange(props.name, e.target.value);
  };
  return (
    <select>
      {props.value.map((playerName) => <option key={playerName} value="{playerName}">{playerName}</option>)}
    </select>
  );
};

PlayerNameTextInput.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([
    PropTypes.array
  ])
};

export default PlayerNameTextInput;
