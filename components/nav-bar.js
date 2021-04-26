import Link from 'next/link'

export default function NavBar({ activePage }) {
  return (
    <nav>
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