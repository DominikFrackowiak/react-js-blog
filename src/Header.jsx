import { Link } from 'react-router-dom'
import { FaLaptop, FaTabletAlt, FaMobileAlt } from 'react-icons/fa'

const Header = ({ title, width }) => {
	return (
		<header className='Header'>
			<Link className='logo' to='/'>
				<h1>{title}</h1>
				{width <= 768 && <FaMobileAlt />}
				{width > 768 && width <= 992 && <FaTabletAlt />}
				{width >= 992 && <FaLaptop />}
			</Link>
		</header>
	)
}

export default Header
