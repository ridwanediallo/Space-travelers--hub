import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import NavBar from '../navBar/NavBar'

describe('Testing navBar component', () => {});
it('should render correctly NavBar component', () => {
  const tree = render(
    <Router>
      <NavBar />
    </Router>
  );
  expect(tree).toMatchSnapshot();
});
