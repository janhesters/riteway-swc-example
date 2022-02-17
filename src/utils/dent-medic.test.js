import { describe } from 'riteway';

import {
  getArchives,
  makeTimeStampReadable,
  prepareResult,
} from './dent-medic';

describe('makeTimeStampReadable()', async assert => {
  assert({
    given: 'a timestamp',
    should: 'should read the readable timestamp',
    actual: makeTimeStampReadable('20210414015759'),
    expected: '14.04.2021',
  });
});

describe('prepareResult()', async assert => {
  {
    const result = {
      url: 'https://www.zahnmedic.de/kraniomandibulaere-dysfunktion-cmd/applied-kinesiologie/',
      archived_snapshots: {
        closest: {
          status: '200',
          available: true,
          url: 'http://web.archive.org/web/20210414015759/https://www.zahnmedic.de/kraniomandibulaere-dysfunktion-cmd/applied-kinesiologie/',
          timestamp: '20210414015759',
        },
      },
    };

    assert({
      given: 'a result',
      should: 'return a stringified version of it',
      actual: prepareResult(result),
      expected:
        'Link: https://www.zahnmedic.de/kraniomandibulaere-dysfunktion-cmd/applied-kinesiologie/, archiviert unter http://web.archive.org/web/20210414015759/https://www.zahnmedic.de/kraniomandibulaere-dysfunktion-cmd/applied-kinesiologie/, archiviert am 14.04.2021',
    });
  }
});

describe('getArchives()', async assert => {
  {
    const urlsToArchive = [
      'https://zahnmedic.de',
      'https://www.zahnmedic.de/kraniomandibulaere-dysfunktion-cmd',
      'https://www.zahnmedic.de/kraniomandibulaere-dysfunktion-cmd/applied-kinesiologie/',
    ];

    assert({
      given: 'a list of urls to check',
      should: 'return the latest archive',
      actual: await getArchives(urlsToArchive),
      expected: [
        'Link: https://zahnmedic.de, archiviert unter http://web.archive.org/web/20211209000757/https://www.zahnmedic.de/, archiviert am 09.12.2021',
        'Link: https://www.zahnmedic.de/kraniomandibulaere-dysfunktion-cmd, archiviert unter http://web.archive.org/web/20210414021929/https://www.zahnmedic.de/kraniomandibulaere-dysfunktion-cmd/, archiviert am 14.04.2021',
        'Link: https://www.zahnmedic.de/kraniomandibulaere-dysfunktion-cmd/applied-kinesiologie/, archiviert unter http://web.archive.org/web/20210414015759/https://www.zahnmedic.de/kraniomandibulaere-dysfunktion-cmd/applied-kinesiologie/, archiviert am 14.04.2021',
      ],
    });
  }
});
