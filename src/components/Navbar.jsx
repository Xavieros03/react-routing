import { Link, NavLink } from "react-router-dom"

const Navbar = () => {
	return (
		<div className='nav'>
			<Link to="/">React Routing</Link>
			<div className='nav-menu'>
				<NavLink to="/movies">Movies</NavLink>
				<NavLink to="/about">About</NavLink>

			</div>
		</div>
	)
}
export default Navbar
