import { describe } from 'riteway';
import render from 'riteway/render-component';

import AbsoluteImports from './no-css-absolute-imports-component';

describe('no css, but with absolute imports component', async assert => {
  const message = 'Props work, too!';
  const $ = render(<AbsoluteImports message={message} />);

  assert({
    given: 'just rendering',
    should: 'render a message that there is neither css nor absolute imports',
    actual: $('p').text(),
    expected: 'No CSS, but we have absolute imports in this component!',
  });

  assert({
    given: 'props',
    should: 'render the props',
    actual: $('div').text(),
    expected: message,
  });
});
