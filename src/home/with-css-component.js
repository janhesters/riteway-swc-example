import styles from 'home/home.module.css';
import { useRouter } from 'next/router';
import { Fragment } from 'react';

import NoCssRelativeImportsComponent from './no-css-relative-imports-component';

export default function WithCSS() {
  const router = useRouter();

  const handleLoginClick = async () => {
    await router.push('/home');
  };

  return (
    <Fragment>
      <div className={styles.container}>
        <header className={styles.header}>
          <button onClick={handleLoginClick}>Login</button>
        </header>

        <main className={styles.main}>
          <h1>Landing Page</h1>
          <NoCssRelativeImportsComponent message="Thank you for the help!" />
        </main>
      </div>
    </Fragment>
  );
}
