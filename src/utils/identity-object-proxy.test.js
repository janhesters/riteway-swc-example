import { describe } from 'riteway';

import identityObjectProxy from './identity-object-proxy';

describe('identity object proxy', async assert => {
  assert({
    given: 'referencing a key',
    should: 'return the key as a string',
    actual: identityObjectProxy.foo,
    expected: 'foo',
  });

  assert({
    given: 'referencing another key',
    should: 'return the key as a string',
    actual: identityObjectProxy.bar,
    expected: 'bar',
  });

  assert({
    given: 'referencing a key via the bracket notation',
    should: 'return the key as a string',
    actual: identityObjectProxy[1],
    expected: '1',
  });
});
