import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import { useForm } from 'react-hook-form';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import toast from 'react-hot-toast';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';

const Login = () => {
    const [loading, setLoading] = useState(false);
    // auto redirect
    const location = useLocation();
    const navigate = useNavigate();
    // console.log('location in the login page',location);
    // show password
    const [show, setShow] = useState(false);
    // use context
    const { signInUser } = useAuth();
    // hook-form
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        const { email, password } = data;
        setLoading(true);
        console.log(email, password);
        signInUser(email, password)
            .then((result) => {
                toast.success('User Login Successful');
                console.log(result.user);
                navigate('/');
                setLoading(false);
            })
            .catch((error) => {
                toast.error('check your email and password and try again');
                console.log(error.message);
                setLoading(false);
            })
    };

    return (
        <div className="w-1/2 mx-auto my-3" >
            <form onSubmit={handleSubmit(onSubmit)} className="bg-slate-200 p-10  rounded-2xl" data-aos="zoom-in" data-aos-duration="1000">
                <div className="form-control" data-aos="fade-right" data-aos-duration="2000">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input {...register("email", { required: true })} type="email" placeholder="email" className="input input-bordered" />
                    {errors.email && <span className="text-red-500">This field is required</span>}

                </div>
                <div className="form-control relative" data-aos="fade-left" data-aos-duration="2000">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type={show ? 'text' : 'password'} placeholder="password" className="input input-bordered" {...register("password", { required: true })} />
                    <span className="absolute top-[52px] right-3" onClick={() => setShow(!show)}>
                        {show ?
                            <FaEye /> :
                            <FaEyeSlash />
                        }
                    </span>
                    {errors.password && <span className="text-red-500">This field is required</span>}
                    <label className="label">
                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                    </label>
                </div>
                <div className="form-control my-3" data-aos="fade-right" data-aos-duration="2000">
                    {loading ? <button className="btn bg-violet-700/60">
                        <AiOutlineLoading3Quarters className="animate-spin text-xl" />
                    </button> :
                        <button className="btn bg-[#adf010]">Login</button>}
                </div>
                <p>Do not Have An Account? <Link className="underline" to="/register">Register One</Link></p>
            </form>

        </div>
    );
};

export default Login;