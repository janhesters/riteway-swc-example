export { default } from 'home/home-page-component';

export const getStaticProps = async () => ({
  props: { user: { email: 'foo@bar.com' } },
});
