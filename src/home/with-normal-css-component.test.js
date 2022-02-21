import { describe } from 'riteway';
import render from 'riteway/render-component';

import WithNormalCSS from './with-normal-css-component';

describe('with normal css component', async assert => {
  const $ = render(<WithNormalCSS />);

  assert({
    given: 'just rendering',
    should: 'render a message where the user is',
    actual: $('h1').text(),
    expected: 'Normal CSS',
  });
});
