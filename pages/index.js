import Layout from '../components/layout/layout'
import Test from '../components/containers/test'

import { fetchTestApi } from '../store/modules/get_api'


const Home = () => (
  <main>
    <Layout></Layout>
    <Test></Test>
  </main>
);

Home.getInitialProps = async (context) => {
  const { reduxStore, isServer } = context;
  if (context) {
    await Promise.all([
      reduxStore.dispatch(fetchTestApi()),
    ])
  }
  return { isServer };
}

export default Home;
