import { Fragment } from 'react';
// Absolute import => breaks! ❌
import identity from 'utils/identity';

const NoCssAbsoluteImportComponent = ({ message }) => (
  <Fragment>
    <p>No CSS, but we have absolute imports in this component!</p>
    <div>{message}</div>
  </Fragment>
);

export default identity(NoCssAbsoluteImportComponent);
