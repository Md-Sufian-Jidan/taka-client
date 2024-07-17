import { BsGraphUp } from 'react-icons/bs'
import { NavLink } from 'react-router-dom'
import { MdOutlineUpcoming } from 'react-icons/md'
import { FaRegNoteSticky } from 'react-icons/fa6';

const AgentRoute = () => {
    return (
        <nav>
            {/* Statistics */}
            <NavLink
                to='/statistic'
                className={({ isActive }) =>
                    `flex items-center px-4 py-2 my-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${isActive ? 'bg-gray-300  text-gray-700' : 'text-gray-600'
                    }`
                }
            >
                <BsGraphUp className='w-5 h-5' />

                <span className='mx-4 font-medium'>Statistics</span>
            </NavLink>

            {/* Add test */}
            <NavLink
                to='cash-out'
                className={({ isActive }) =>
                    `flex items-center px-4 py-2 my-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${isActive ? 'bg-gray-300  text-gray-700' : 'text-gray-600'
                    }`
                }
            >
                <MdOutlineUpcoming className='w-5 h-5' />
                <span className='mx-4 font-medium'>Account management</span>
            </NavLink>
            {/* My Test Result */}
            <NavLink
                to='/my-test-result'
                className={({ isActive }) =>
                    `flex items-center px-4 py-2 my-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${isActive ? 'bg-gray-300  text-gray-700' : 'text-gray-600'
                    }`
                }
            >
                <FaRegNoteSticky className='w-5 h-5' />

                <span className='mx-4 font-medium'>Transactions</span>
            </NavLink>
        </nav>
    );
};

export default AgentRoute;