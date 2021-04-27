import Link from 'next/link'

export default function NavBar({ activePage }) {

  const navStl = {
    display: 'flex', 
    backgroundColor: '#444'
  }

  const logo = {
    display: 'inline-block',
    color: '#FFF',
    backgroundColor: '#222',
    fontSize: 20,
    padding: '10px 30px',
  }

  return (
    <nav style={navStl} >
      <h1 style={logo}>Next WP</h1>
      <ul>
        <li>
          <Link href="/">
            <a className={`hover:underline ${activePage=='/'?'active':''}`}>
              Home
            </a>
          </Link>
        </li>
        <li>
          <Link href="/movies">
            <a className={`hover:underline ${activePage=='/movies'?'active':''}`}>
              Movies
            </a>
          </Link>
        </li>
      </ul>
    </nav>
  )
}