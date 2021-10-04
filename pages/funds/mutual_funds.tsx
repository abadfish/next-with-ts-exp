import Link from 'next/link'
import Image from 'next/image'
import { NextPage } from 'next'


const MutualFunds: NextPage = () => {
  return (
    <div>
      <h1>Open Ends Home Page</h1>
      <Link href='/funds/mutual-funds/7'>Fund Show Page</Link>
    </div>
  )
}

export default MutualFunds