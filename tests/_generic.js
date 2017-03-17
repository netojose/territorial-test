import React from 'react';
import { mount } from 'enzyme';

import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import reducer from '../src/redux/reducer.js';

export function render(component, classToMatch){
    const wrapper = mount(component);
    expect(wrapper.find(classToMatch)).toHaveLength(1);
}

export function getStore(){
    return createStore(reducer, applyMiddleware(thunk));
}