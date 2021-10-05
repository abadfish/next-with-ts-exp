import type { NextPage } from 'next'
import Link from 'next/link'
import Layout from '../components/Layout'


const Home: NextPage = () => {
  return (
    <Layout>
      <h1>Funds Home</h1>
      <Link href='/funds/mutual-funds'>
        <h2>View All Funds </h2>
      </Link>
    </Layout>
  )
}


export default Home
