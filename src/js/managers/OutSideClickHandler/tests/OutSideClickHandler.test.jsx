import React from 'react';
import { render, cleanup } from 'react-testing-library';
import 'jest-styled-components';

import { OutSideClickHandler } from '../OutSideClickHandler';

const setup = component => {
  const { container } = render(component);
  return container;
};

afterEach(cleanup);

describe('components', () => {
  describe('<OutSideClickHandler />', () => {
    it('should render and match the snapshot', () => {
      expect(setup(<OutSideClickHandler />)).toMatchSnapshot();
    });
  });
});
