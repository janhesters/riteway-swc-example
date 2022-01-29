import { describe } from 'riteway';

import identity from './identity';

describe('identity', async assert => {
  assert({
    given: 'a value',
    should: 'returns that value',
    actual: identity(42),
    expected: 42,
  });
});
