import constants from  '../src/redux/constants';
import {
    setSearchValue,
    setLoaderVisibility,
    setSearchResults
} from  '../src/redux/actionCreators/Search';

import axios from 'axios';
var MockAdapter = require('axios-mock-adapter');
var mock = new MockAdapter(axios);

import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
const middlewares = [ thunk ];
const mockStore = configureMockStore(middlewares);
import {getStore} from './_generic';
const store = mockStore(getStore());

describe('Action creators test', () => {
  it('setSearchValue', () => {
    const expectedAction = {
      type: constants.SET_SEARCH_TERM,
      value: 'Some term'
    };
    expect(setSearchValue('Some term')).toEqual(expectedAction);
  });

  it('setLoaderVisibility - true', () => {
    const expectedAction = {
      type: constants.SET_LOADER_VISIBILITY,
      visibility: true
    };
    expect(setLoaderVisibility(true)).toEqual(expectedAction);
  });

  it('setLoaderVisibility - false', () => {
    const expectedAction = {
      type: constants.SET_LOADER_VISIBILITY,
      visibility: false
    };
    expect(setLoaderVisibility(false)).toEqual(expectedAction);
  });

  it('setSearchResults', () => {

    let payload = {
      data: {
        count: 50,
        next: '',
        previous: ''
      },
      results: [
        { name: 'Luke Skywalker' }
      ]
    };

    mock.onAny().reply(200, payload);

    return store.dispatch(setSearchResults('Lu'))
    .then(() => {
        expect(store.getActions().find(item => item.type == constants.SET_SEARCH_RESULTS).data).toEqual(payload);
    })

  });

})