import { Fragment } from 'react';

// Relative import => works! ✅
import identity from '../utils/identity';

const NoCssRelativeImportComponent = ({ message }) => (
  <Fragment>
    <p>No CSS or absolute imports in this component!</p>
    <div>{message}</div>
  </Fragment>
);

export default identity(NoCssRelativeImportComponent);
