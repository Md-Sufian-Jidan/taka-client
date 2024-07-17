import PropTypes from 'prop-types'
import { Dialog, Transition, TransitionChild, DialogPanel, DialogTitle, } from '@headlessui/react'
import { Fragment, } from 'react'
import { PiSpinnerGapBold } from 'react-icons/pi';
// import { useForm } from 'react-hook-form';
// import useAuth from '../../../Hooks/useAuth';


const ChangePassword = ({ closeModal, isOpen, handlePassword, loading }) => {
    // const { resetPassword, user } = useAuth();
    // const [loading, setLoading] = useState(false);
    // const { register, handleSubmit, formState: { errors } } = useForm();
    // const onSubmit = async (data) => {
    //     setLoading(true);
    //     resetPassword(user?.email)
    //     console.log(data);
    // }

    // console.log(bookingInfo);
    return (
        <Transition appear show={isOpen} as={Fragment}>
            <Dialog as='div' className='relative z-10' onClose={closeModal}>
                <TransitionChild
                    as={Fragment}
                    enter='ease-out duration-300'
                    enterFrom='opacity-0'
                    enterTo='opacity-100'
                    leave='ease-in duration-200'
                    leaveFrom='opacity-100'
                    leaveTo='opacity-0'
                >
                    <div className='fixed inset-0 bg-black bg-opacity-25' />
                </TransitionChild>

                <div className='fixed inset-0 overflow-y-auto'>
                    <div className='flex min-h-full items-center justify-center p-4 text-center'>
                        <TransitionChild
                            as={Fragment}
                            enter='ease-out duration-300'
                            enterFrom='opacity-0 scale-95'
                            enterTo='opacity-100 scale-100'
                            leave='ease-in duration-200'
                            leaveFrom='opacity-100 scale-100'
                            leaveTo='opacity-0 scale-95'
                        >
                            <DialogPanel className='w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all'>
                                <DialogTitle
                                    as='h3'
                                    className='text-lg font-medium text-center leading-6 text-gray-900'
                                >
                                    I Forget My Password
                                </DialogTitle>
                                <div className='flex gap-1 mt-5'>
                                    <label className="text-xl font-medium" htmlFor="username">Send Password Reset Email</label>
                                    <input className='w-8' type="checkbox" name="" id="" required />
                                    {/* {...register("check", { required: true })}  */}
                                    {/* {errors.check && <span className="text-red-500">Check The box</span>} */}
                                </div>
                                {/* onSubmit={handleSubmit(onSubmit)} */}
                                <form>
                                    <div className='mt-5'>
                                        {loading ? <button className='btn w-full'><PiSpinnerGapBold className='animate-spin' size={20} /></button> :
                                            <button onClick={() => {
                                                handlePassword()
                                                closeModal()
                                            }} className='btn w-full bg-green-900/40'>Reset Password</button>}
                                    </div>
                                </form>
                            </DialogPanel>
                        </TransitionChild>
                    </div>
                </div>
            </Dialog>
        </Transition>
    )
}

ChangePassword.propTypes = {
    bookingInfo: PropTypes.object,
    closeModal: PropTypes.func,
    isOpen: PropTypes.bool,
    handlePassword: PropTypes.func,
    setLoading: PropTypes.func,
    loading: PropTypes.bool,
}

export default ChangePassword