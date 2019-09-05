import React from 'react';
import { mount, render, shallow } from 'finance-unit-test';
import Deep from '../../component/deep/index.js';

describe('deep', () => {
  it('测试mount渲染', () => {
    const wrapper = mount(<Deep />);
		expect(wrapper.find('.c')).toHaveLength(1);
	});

  it('测试shallow渲染', () => {
    const wrapper = shallow(<Deep />);
    expect(wrapper.find('.c')).toHaveLength(1);
  });

  it('测试render渲染', () => {
    const wrapper = render(<Deep />);
    expect(wrapper.find('.c')).toHaveLength(1);
  });
})