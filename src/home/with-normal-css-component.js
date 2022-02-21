import 'home/normal.css';

import { Fragment } from 'react';

import NoCssRelativeImportsComponent from './no-css-relative-imports-component';

export default function WithNormalCSS() {
  return (
    <Fragment>
      <div className="container">
        <main className="main">
          <h1>Normal CSS</h1>
          <NoCssRelativeImportsComponent message="Thank you for the help!" />
        </main>
      </div>
    </Fragment>
  );
}
