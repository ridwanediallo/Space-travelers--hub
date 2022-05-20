import React from 'react';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import Missions from '../missions/Missions';
import { Provider } from 'react-redux';
import store from '../../redux/store'

describe('Testing mission component', () => {})
it('should render correctly Mission component', () => {
  const tree = render(
  <Provider store={store}>
   <Missions />
  </Provider>,

)
expect(tree).toMatchSnapshot()
});


