import React from 'react';
import SearchBar from '../src/components/SearchBar';

import { mount } from 'enzyme';

import {getStore} from './_generic';
const store = getStore();

import {setSearchResults} from '../src/redux/actionCreators/Search';

let component;

describe('SearchBar component', () => {

  beforeEach(() => {
      component = mount(<SearchBar store={store} />);
  })

  it('render component <SearchBar />', () => {
    expect(component.find('.SearchBar')).toHaveLength(1);
  });

  it('typed value is passed to store', () => {
    component.find('input[type="text"]').simulate('change', { target: { value: 'Lu' } });
    expect(component.props().store.getState().searchTerm).toEqual('Lu');
  });

});