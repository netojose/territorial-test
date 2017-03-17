import React from 'react';
import Paginator from '../src/components/Paginator';

import {render} from './_generic';
import { mount } from 'enzyme';

describe('Paginator component', () => {
    it('render component <Paginator />', () => {
        render(<Paginator currentPage={1} totalPages={1} onClickHandler={() => {}} />, Paginator);
    });

    it('Display correct active pagination item', () => {
        let component = mount(<Paginator currentPage={3} totalPages={4} onClickHandler={() => {}} />);
        expect(component.find('li.current').text()).toBe("3");
    });

    it('Display correct number of pagination items', () => {
        let component = mount(<Paginator currentPage={3} totalPages={9} onClickHandler={() => {}} />);
        expect(component.find('ul').first().children().length).toBe(9);
    });
});
