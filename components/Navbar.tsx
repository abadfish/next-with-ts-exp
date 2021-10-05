import Link from 'next/link'

export default function Navbar() {
  return (
    <nav style={{ backgroundColor: 'blue' }}>
      <Link href='/'>Home</Link>
      <Link href='/funds/mutual-funds'>Funds</Link>

    </nav>
    
  )
}
