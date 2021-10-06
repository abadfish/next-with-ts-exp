import { NextPage } from 'next'
import { useRouter } from 'next/router'
import { GetStaticProps } from 'next'
import type { ReactElement } from 'react'
import Layout from '../../../components/Layout'
import FundsLayout from '../../../components/FundsLayout'
import { dehydrate, QueryClient, useQuery } from 'react-query'
import { server } from '../../../config'
import { getFunds } from '../mutual-funds'


export async function getFund(fund_code: String) {
  const res = await fetch(`${ server }/nav_open_ends/${ fund_code }`)
  const fund = await res.json()
  return fund
}

export async function getStaticPaths() {
  const funds = await getFunds()
  const paths = funds.map((fund) => ({
    params: { fund_code: fund.fund_code.toString() }
  }))
  return {
    paths,
    fallback: false
  }
}

// export const getStaticProps: GetStaticProps = async ({ params }) => {
//   const queryClient = new QueryClient()
//   await queryClient.prefetchQuery('fund', getFund(params.fund_code.toString()))
//   return {
//     props: {
//       dehydratedState: dehydrate(queryClient),
//       fund_code: params.fund_code
//     },
//   }
// }
export const getStaticProps: GetStaticProps = async ({ params }) => {
  return {
    props: {
      fund: await getFund(params.fund_code)
    }
  }
}


const MutualFund: NextPage = ({ fund }) => {
  console.log(fund)

  const router = useRouter()
  // const { fund_code } = router.query
  // const data  = useQuery('fund', getFund)
  // console.log(data)

  if (router.isFallback) {
    return <div>Loading...</div>
  }
  return (
    <div>
      <h1>MF show page</h1>
    </div>
  )
}

export default MutualFund