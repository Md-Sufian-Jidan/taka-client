import { useState } from 'react'
import { AiOutlineBars } from 'react-icons/ai'
import { NavLink } from 'react-router-dom'
import { Link } from 'react-router-dom'
// import useAdmin from '../../../Hooks/useAdmin'
import toast from 'react-hot-toast'
import { MdLogout } from 'react-icons/md'
import { CgProfile } from 'react-icons/cg'
import useAuth from '../../Hooks/useAuth'
import AdminRoute from '../Roles/Admin/AdminRoute'
import UserRoute from '../Roles/User/User'
// import useAdmin from '../../../Hooks/useAdmin'
// import useRole from '../../../Hooks/useRole'

const Sidebar = () => {
    const { user, logout } = useAuth();
    const handleLogOut = () => {
        logout()
            .then(() => { return toast.success('User logout successfully') })
            .catch(err => { return toast.error(err.message) });
    }
    const [isActive, setActive] = useState(false)
    // const [isAdmin] = useAdmin();
    // console.log(isAdmin);

    const isAdmin = false;

    // Sidebar Responsive Handler
    const handleToggle = () => {
        setActive(!isActive)
    }
    return (
        <>
            {/* Small Screen Navbar */}
            <div className='bg-indigo-100 text-gray-800 flex justify-between md:hidden'>
                <div>
                    <div className='block cursor-pointer p-4 font-bold'>
                        <Link className='flex items-center gap-1' to='/'>
                            <img
                                className='rounded-3xl'
                                src='https://i.ibb.co/8KsgpBj/5c7fde3b-61fe-4d7d-9fbd-544ad7e9b9f8.jpg'
                                alt='logo'
                                width='50'
                                height='50'
                            />
                            <span className='text-xl text-green-500'>TakaSwift</span>
                        </Link>
                    </div>
                </div>

                <button
                    onClick={handleToggle}
                    className='mobile-menu-button p-4 focus:outline-none focus:bg-indigo-200'
                >
                    <AiOutlineBars className='h-5 w-5' />
                </button>
            </div>

            {/* Sidebar */}
            <div
                className={`z-10 md:fixed flex flex-col justify-between overflow-x-hidden bg-indigo-100 w-64 space-y-6 px-2 py-4 absolute inset-y-0 left-0 transform ${isActive && '-translate-x-full'
                    }  md:translate-x-0  transition duration-200 ease-in-out`}
            >
                <div>
                    <div>
                        <div className='w-full hidden md:flex px-4 py-2 shadow-lg rounded-lg justify-center items-center bg-slate-100 mx-auto'>
                            <Link className='flex items-center gap-1' to='/'>
                                <img
                                    className='rounded-3xl '
                                    src='https://i.ibb.co/8KsgpBj/5c7fde3b-61fe-4d7d-9fbd-544ad7e9b9f8.jpg'
                                    alt='logo'
                                    width='50'
                                    height='50'
                                />
                                <span className='text-xl text-green-500'>TakaSwift</span>
                            </Link>
                        </div>
                    </div>

                    {/* Nav Items */}
                    <div className='flex flex-col justify-between flex-1 mt-6'>
                        {/*  Menu Items */}
                        {isAdmin ? <AdminRoute /> :
                            user?.status === 'blocked' ? toast.error('You Are Blocked By Admin')
                                : <UserRoute />}

                    </div>
                </div>

                <div>
                    <hr />

                    {/* Profile Menu */}
                    <NavLink
                        to='/dashboard/profile'
                        className={({ isActive }) =>
                            `flex items-center px-4 py-2 my-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${isActive ? 'bg-gray-300  text-gray-700' : 'text-gray-600'
                            }`
                        }
                    >
                        <CgProfile className='w-5 h-5' />

                        <span className='mx-4 font-medium'>Profile</span>
                    </NavLink>
                    <button
                        onClick={handleLogOut}
                        className='flex w-full items-center px-4 py-2 mt-5 text-gray-600 hover:bg-gray-300   hover:text-gray-700 transition-colors duration-300 transform'
                    >
                        <MdLogout className='w-5 h-5' />

                        <span className='mx-4 font-medium'>Logout</span>
                    </button>
                </div>
            </div>
        </>
    )
}

export default Sidebar