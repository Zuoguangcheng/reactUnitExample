import React from 'react';
import financeUnitTest from 'finance-unit-test';
import Dom from '../../component/dom/index.js';

const getWrapper = (props = {}) => {
    const defaultProps = {};
    const currentProps = Object.assign({}, defaultProps, props);

    let wrapper = financeUnitTest.mount(<Dom {...currentProps} />);

    return {
        wrapper,
        currentProps
    };
};


describe('dom', () => {
  it('测试正常渲染', () => {
		const { wrapper } = getWrapper();
		expect(wrapper.find('.dom')).toHaveLength(1);
	});

  it('测试dom元素插入', () => {
    const { wrapper } = getWrapper({});
    const script = document.querySelector('#dom');
    expect(script).toBeInTheDocument();
  })
})