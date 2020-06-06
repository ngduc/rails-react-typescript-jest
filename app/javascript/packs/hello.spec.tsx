import * as React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import { Hello } from './hello_typescript';

it('Hello test', () => {
  const { container } = render(<Hello name="Jest" />);
  expect(container).toHaveTextContent('Hello Jest!');
});
