
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className='bg-slate-100 max-w-[100vw] flex justify-between items-center px-24 py-3 text-2xl shadow-lg'>
            <div>
                <Link to='/'>
                    <h2>SUJAN MGR.</h2>
                </Link>
            </div>
            <ul className='flex justify-around items-center gap-4'>
                <li>
                    <NavLink to='' className={({ isActive }) =>
                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"}  hover:bg-slate-100 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                    }    >
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to={'/about'} className={({ isActive }) =>
                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"}  hover:bg-slate-100 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                    } >
                        About
                    </NavLink>
                </li>
                <li>
                    <NavLink to={'/contact'} className={({ isActive }) =>
                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"}  hover:bg-slate-100 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                    } >
                        Contact
                    </NavLink>
                </li>
            </ul>
        </div>
    )
}

export default Navbar