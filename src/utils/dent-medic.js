import axios from 'axios';
import { filter, map, propEq } from 'ramda';

const isAvailable = propEq('available', true);
const filterAvailable = filter(isAvailable);

const BASE_URL = 'http://archive.org/wayback/available';
const toQuery = url => `${BASE_URL}?url=${url}`;

const fetchArchive = async url => await axios.get(url).then(({ data }) => data);

export const makeTimeStampReadable = timestamp => {
  const [y1, y2, y3, y4, m1, m2, d1, d2] = timestamp.toString();
  return `${d1}${d2}.${m1}${m2}.${y1}${y2}${y3}${y4}`;
};

export const prepareResult = ({
  url: link,
  archived_snapshots: {
    closest: { url, timestamp },
  },
}) =>
  `Link: ${link}, archiviert unter ${url}, archiviert am ${makeTimeStampReadable(
    timestamp,
  )}`;

export const getArchives = async urls => {
  const queries = map(toQuery, urls);
  const results = await Promise.all(map(fetchArchive, queries));
  return map(prepareResult, results);
};
