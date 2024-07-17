import UpdateUserProfile from '../Form/UpdateUserProfile';
import { useState } from 'react';
import ChangePassword from '../Form/ChangePassword';
import toast from 'react-hot-toast';
import useAuth from '../../Hooks/useAuth';
import useRole from '../../Hooks/useRole';
import { Helmet } from 'react-helmet-async';

const Profile = () => {
    const { user, resetPassword } = useAuth();
    const [role, isLoading] = useRole();
    // console.log(role);
    const [isOpen, setIsOpen] = useState(false);
    const [passwordIsOpen, setPasswordIsOpen] = useState(false);
    const [loading, setLoading] = useState(false);

    const closeModal = () => {
        setIsOpen(false);
        setPasswordIsOpen(false);
    };
    // console.log(user);

    const handlePassword = (e) => {
        e.preventDefault();
        setLoading(true);
        resetPassword(user?.email)
            .then(() => toast.success('Send Password Verification Email.Check Your Email'))
    }

    if (isLoading) return <div className='text-5xl my-20'>Loading...</div>
    return (
        <>
            <Helmet>
                <title>Profile</title>
            </Helmet>
            <div className='flex justify-center items-center h-screen'>
                <div className='bg-white shadow-lg rounded-2xl w-3/5'>
                    <img
                        alt='profile'
                        // https://i.ibb.co/S3DXRY6/profile.jpg
                        src={`${user?.photoURL || 'https://i.ibb.co/S3DXRY6/profile.jpg'}`}
                        className='w-full mb-4 rounded-t-lg h-36'
                    />
                    <div className='flex flex-col items-center justify-center p-4 -mt-16'>
                        <div className='relative block'>
                            <img
                                alt='profile'
                                src={user?.photoURL}
                                className='mx-auto object-cover rounded-full h-24 w-24  border-2 border-white '
                            />
                        </div>
                        <p className='mt-2 text-xl font-medium text-gray-800 '>
                            User Id: {user?.uid}
                        </p>
                        <p className='p-2 px-4 text-xs text-white bg-indigo-500 rounded-full '>
                            {/* {role?.role.split('')[0].toUpperCase() + role?.role.substring(1,4)} */}
                            {role?.split('')[0].toUpperCase() + role?.substring(1, 5)}
                        </p>

                        <div className='w-full p-2 mt-4 rounded-lg'>
                            <div className='flex flex-wrap items-center justify-between text-sm text-gray-600 '>
                                <p className='flex flex-col'>
                                    Name
                                    <span className='font-bold text-black '>
                                        {user?.displayName}
                                    </span>
                                </p>
                                <p className='flex flex-col'>
                                    Email
                                    <span className='font-bold text-black '>{user?.email}</span>
                                </p>

                                <div>
                                    <button onClick={() => setIsOpen(true)} className='bg-indigo-500 px-10 py-1 rounded-lg text-white cursor-pointer hover:bg-gradient-to-tr from-green-500 to-green-800 block mb-1'>
                                        Update Profile
                                    </button>
                                    <UpdateUserProfile closeModal={closeModal} isOpen={isOpen} bookingInfo={user} />
                                    <button onClick={() => setPasswordIsOpen(true)} className='bg-indigo-500 px-7 py-1 rounded-lg text-white cursor-pointer hover:bg-gradient-to-tr from-green-500 to-green-800'>
                                        Change Password
                                    </button>
                                    <ChangePassword closeModal={closeModal} isOpen={passwordIsOpen} handlePassword={handlePassword} loading={loading} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Profile