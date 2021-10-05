import { NextPage } from 'next'
import { useRouter } from 'next/router'
import { GetStaticProps } from 'next'
import type { ReactElement } from 'react'
import Layout from '../../../components/Layout'
import FundsLayout from '../../../components/FundsLayout'
import { dehydrate, QueryClient, useQuery } from 'react-query'
import { server } from '../../../config'


export async function getFund(fund_code: Number) {
  const res = await fetch(`${ server }/nav_open_ends/${ fund_code }`)
  const fund = await res.json()
  return fund
}

export const getStaticProps: GetStaticProps = async (fund_code) => {
  const queryClient = new QueryClient()
  await queryClient.prefetchQuery('fund', getFund(fund_code))
  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  }
}


const MutualFund: NextPage = () => {

  const router = useRouter()
  const { fund_code } = router.query
  const { data } = useQuery('fund', getFund( fund_code))

  return (
    <div>
      <h1>MF show page</h1>
    </div>
  )
}

export default MutualFund