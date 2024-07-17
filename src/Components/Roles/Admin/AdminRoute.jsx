import { NavLink } from 'react-router-dom'
import { MdAddChart } from 'react-icons/md'
import { RiReservedFill } from 'react-icons/ri';
import { BiTestTube } from 'react-icons/bi';
import { FaUsers } from 'react-icons/fa';
import { GiTestTubes } from 'react-icons/gi';
import { IoMdAddCircleOutline } from 'react-icons/io';
import { LiaBasketballBallSolid } from 'react-icons/lia';

const AdminRoute = () => {
    return (
        <nav>
            {/* Statistics */}
            <NavLink
                to='/statistic'
                end
                className={({ isActive }) =>
                    `flex items-center px-4 py-2 my-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${isActive ? 'bg-gray-300  text-gray-700' : 'text-gray-600'
                    }`
                }
            >
                <MdAddChart className='w-5 h-5' />

                <span className='mx-4 font-medium'>Statistics</span>
            </NavLink>
            {/* All Users */}
            <NavLink
                to='all-users'
                className={({ isActive }) =>
                    `flex items-center px-4 py-2 my-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${isActive ? 'bg-gray-300  text-gray-700' : 'text-gray-600'
                    }`
                }
            >
                <FaUsers className='w-5 h-5' />
                <span className='mx-4 font-medium'>All users</span>
            </NavLink>
            {/* Add test */}
            <NavLink
                to='add-test'
                className={({ isActive }) =>
                    `flex items-center px-4 py-2 my-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${isActive ? 'bg-gray-300  text-gray-700' : 'text-gray-600'
                    }`
                }
            >
                <BiTestTube className='w-5 h-5' />
                <span className='mx-4 font-medium'>Add Test</span>
            </NavLink>
            {/* All Test */}
            <NavLink
                to='all-tests'
                className={({ isActive }) =>
                    `flex items-center px-4 py-2 my-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${isActive ? 'bg-gray-300  text-gray-700' : 'text-gray-600'
                    }`
                }
            >
                <GiTestTubes className='w-5 h-5' />
                <span className='mx-4 font-medium'>All Test Route</span>
            </NavLink>
            {/* Reservation */}
            <NavLink
                to='reservations'
                className={({ isActive }) =>
                    `flex items-center px-4 py-2 my-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${isActive ? 'bg-gray-300  text-gray-700' : 'text-gray-600'
                    }`
                }
            >
                <RiReservedFill className='w-5 h-5' />
                <span className='mx-4 font-medium'>Reservation</span>
            </NavLink>
            {/* add banner */}
            <NavLink
                to='add-banner'
                className={({ isActive }) =>
                    `flex items-center px-4 py-2 my-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${isActive ? 'bg-gray-300  text-gray-700' : 'text-gray-600'
                    }`
                }
            >
                <IoMdAddCircleOutline className='w-5 h-5' />

                <span className='mx-4 font-medium'>Add Banner</span>
            </NavLink>
            {/* all banner */}
            <NavLink
                to='all-banner'
                className={({ isActive }) =>
                    `flex items-center px-4 py-2 my-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${isActive ? 'bg-gray-300  text-gray-700' : 'text-gray-600'
                    }`
                }
            >
                <LiaBasketballBallSolid className='w-5 h-5' />

                <span className='mx-4 font-medium'>All Banner</span>
            </NavLink>
        </nav>
    );
};

export default AdminRoute;