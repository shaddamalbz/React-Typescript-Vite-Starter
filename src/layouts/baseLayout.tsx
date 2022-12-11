import { Link, Outlet } from 'react-router-dom'

const baseLayout = () => {
  return (
    <>
      <header>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <a
          href="https://github.com/shaddamalbz"
          target="_blank"
          rel="noreferrer"
        >
          Shaddamalbz
        </a>
      </footer>
    </>
  )
}

export default baseLayout
