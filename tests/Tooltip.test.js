import React from 'react';
import Tooltip from '../src/components/Tooltip';

import {render} from './_generic';
import { mount } from 'enzyme';

let component;
let tooltipData = {
    birth_year: '1900',
    eye_color: 'blue',
    gender: 'male',
    height: '200'
};

describe('Tooltip component', () => {

    beforeEach(() => {
        component = mount(<Tooltip display={true} data={tooltipData} />);
    })

    it('render component <Tooltip />', () => {
        render(<Tooltip display={false} data={{}} />, Tooltip);
    });

    it('Tooltip hide on set display false', () => {
        expect(component.html()).not.toBeNull();
        component.setProps({ display: false });
        expect(component.html()).toBeNull();
    });

    it('Tooltip show on set display true', () => {
        component.setProps({ display: false });
        expect(component.html()).toBeNull();
        component.setProps({ display: true });
        expect(component.html()).not.toBeNull();
    });

    it('Tooltip data is displayed correctly', () => {
        expect(component.find('[data-info="birth_year"]').text()).toEqual(tooltipData.birth_year);
        expect(component.find('[data-info="eye_color"]').text()).toEqual(tooltipData.eye_color);
        expect(component.find('[data-info="gender"]').text()).toEqual(tooltipData.gender);
        expect(component.find('[data-info="height"]').text()).toEqual(tooltipData.height);
    });
});
