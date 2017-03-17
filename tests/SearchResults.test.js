import React from 'react';
import SearchResults from '../src/components/SearchResults';

import { shallow, mount } from 'enzyme';

import configureStore from 'redux-mock-store';
import {initialState} from '../src/redux/reducer';

const middlewares = [];
const mockStore = configureStore(middlewares);
const store = mockStore(initialState);

describe('SearchResults component', () => {

  it('render component <SearchResults />', () => {
    let component = mount(<SearchResults store={store} paginateResults={() => {}} currentPage={1} currentPage={1} />);
    expect(component).toHaveLength(1);
  });
});
