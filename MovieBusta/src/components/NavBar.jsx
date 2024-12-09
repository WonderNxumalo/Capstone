import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li>Movie Info</li>
        </ul>
    </nav>
  )
}

export default NavBar;