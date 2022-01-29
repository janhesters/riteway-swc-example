import { describe } from 'riteway';
import render from 'riteway/render-component';

import NoCssComponent from './no-css-relative-imports-component';

describe('no css and with relative imports component', async assert => {
  const message = 'Props work, too!';
  const $ = render(<NoCssComponent message={message} />);

  assert({
    given: 'just rendering',
    should: 'render a message that there is neither css nor absolute imports',
    actual: $('p').text(),
    expected: 'No CSS or absolute imports in this component!',
  });

  assert({
    given: 'props',
    should: 'render the props',
    actual: $('div').text(),
    expected: message,
  });
});
