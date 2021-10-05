import Link from 'next/link'

export default function FundsLayout({ children }) {
  return (
    <>
      <Link href='/'>Funds Links</Link>
      <main>
        { children }
      </main>
    </>
  )
  
}
