import Link from 'next/link'
import Image from 'next/image'
import { GetStaticProps } from 'next'
import type { ReactElement } from 'react'
import Layout from '../../components/Layout'
import FundsLayout from '../../components/FundsLayout'
import { dehydrate, QueryClient, useQuery } from 'react-query'
import { server } from '../../config'

export async function getFunds() {
  const res = await fetch(`${ server }/nav_open_ends`)
  const funds = await res.json()
  return funds
}

export const getStaticProps: GetStaticProps = async (_context) => {
  const queryClient = new QueryClient()
  await queryClient.prefetchQuery('funds', getFunds)
  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  }
}

export default function MutualFunds () {
  const { data } = useQuery('funds', getFunds)

  const fundList = data.map(f => (
      <li key={f.id}>
        <Link href="/funds/mutual-funds/[fund_code]" as={`/funds/mutual-funds/${f.fund_code}`}> 
          <a>{`Fund: ${ f.fund_code }`}</a>
        </Link>
      </li>
  ))
  return (
    <div>
      <h1>Open Ends Home Page</h1>
      <ul>{ fundList }</ul>
    </div>
  )
}

MutualFunds.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      <FundsLayout>{page}</FundsLayout>
    </Layout>
  )
}



// import useSwr from 'swr'


// swr
// const fetcher = (url) => fetch(url).then((res) => res.json())

  // const { data, error } = useSwr(`${ server }/nav_open_ends`, fetcher)
  // console.log(data)

  // if (error) return <div>Failed to load mutual funds</div>
  // if (!data) return <div>Loading...</div>
