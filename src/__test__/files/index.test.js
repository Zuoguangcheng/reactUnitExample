import React from 'react';
import Files from '../../component/files/index.js';
import financeUnitTest from 'finance-unit-test';

const getWrapper = (props = {}) => {
    const defaultProps = {};
    const currentProps = Object.assign({}, defaultProps, props);

    let wrapper = financeUnitTest.mount(<Files {...currentProps} />);

    return {
        wrapper,
        currentProps
    };
};


jest.mock('lodash', () => {
  return {
      forEach: ((arr, cb) => {
        for(let i = 0; i < arr.length; i++) {
          cb(100)
        }
      })
  }
});

describe('files', () => {
  it('test', async() => {
    const { wrapper } = getWrapper({});
  })
})





describe('测试模块1', () => {
  it('测试case1', () => {

  });

  it('测试case2', () => {

  })
});

describe('测试模块2', () => {
  it('测试case1', () => {

  });

  it('测试case2', () => {
    
  })
});