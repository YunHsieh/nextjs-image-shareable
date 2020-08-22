import Layout, { siteTitle } from '../components/layout/layout'
import { getSortedPostsData } from '../lib/posts'

const Home = ({ allPostsData }) => {
  return (
    <>
      <Layout>
      </Layout>
    </>
  )
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}

export default Home;