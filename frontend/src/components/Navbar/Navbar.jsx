import './navbar.css'

const Navbar = () => {
  return (
    <nav className="nav grid">
      <a className='span_6' href="/">Luna</a>
      <ul className='span_6'>
        <a href="/">Home</a>
        <a href="/">About</a>
        <a href="/">Portfolio</a>
        <a href="/">Contact</a>
      </ul>
    </nav>
  )
}

export default Navbar