import React from 'react';
import { shallow } from 'enzyme';
import Container from '../../../components/Container/Container';

it('renders without crashing', () => {
  shallow(<Container />);
});
