import React from 'react';
import {shallow} from 'enzyme';
import {expect} from 'chai';
import {FoosballGamePage} from './FoosballGamePage';
import FoosballGameForm from '../components/FoosballGameForm';

describe('<FoosballGamePage />', () => {
  it('should contain <FoosballGameForm />', () => {
    const actions = {
      saveFuelSavings: () => { },
      calculateFuelSavings: () => { }
    };
    const appState = {};
    const wrapper = shallow(<FoosballGamePage actions={actions} appState={appState}/>);

    expect(wrapper.find(FoosballGameForm)).to.be.length(1);
  });
});
