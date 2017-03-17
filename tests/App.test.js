import React from 'react';
import App from '../src/components/App';

import { shallow } from 'enzyme';

describe('App component', () => {
  it('render component <App />', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('.App')).toHaveLength(1);
  });
});