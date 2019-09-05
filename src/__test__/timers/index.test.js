import React from 'react';
import Timers from '../../component/timers/index.js';
import financeUnitTest from 'finance-unit-test';

const getWrapper = (props = {}) => {
    const defaultProps = {};
    const currentProps = Object.assign({}, defaultProps, props);

    let wrapper = financeUnitTest.mount(<Timers {...currentProps} />);

    return {
        wrapper,
        currentProps
    };
};


describe('timers', () => {
  it('test', async() => {
    jest.useFakeTimers();
    const { wrapper } = getWrapper({});
    jest.runAllTimers();

    expect(wrapper.state().count).toBe(100);
  })
})


describe('timers222', () => {
  it('test222', async() => {
    jest.useFakeTimers();
    const { wrapper } = getWrapper({});
    jest.runAllTimers();

    expect(wrapper.state().count).toBe(100);
  })
})