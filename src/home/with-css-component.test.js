import { describe } from 'riteway';
import render from 'riteway/render-component';

import WithCSS from './with-css-component';

describe('with css component', async assert => {
  const $ = render(<WithCSS />);

  assert({
    given: 'just rendering',
    should: 'render a message where the user is',
    actual: $('h1').text(),
    expected: 'Landing Page',
  });
});
