import styles from 'home/home.module.css';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { Fragment } from 'react';

import AbsoluteImports from './no-css-absolute-imports-component';

export default function HomePageComponent({ user }) {
  const router = useRouter();

  const handleLogoutClick = async () => {
    await router.push('/');
  };

  return (
    <Fragment>
      <Head>
        <title>Home</title>
        <meta name="description" content="by Jan Hesters" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.container}>
        <header className={styles.header}>
          <button onClick={handleLogoutClick}>Logout</button>
        </header>

        <main className={styles.main}>
          <h1>Home</h1>
          <p>{user.email}</p>
          <AbsoluteImports message="Thanks again!" />
        </main>
      </div>
    </Fragment>
  );
}
