import { useState } from "react";
import useAuth from "../../Hooks/useAuth";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";
import useAxiosPublic from "../../Hooks/useAxiosPublic";


const Register = () => {
    // show password
    const [show, setShow] = useState(false);
    // create user 
    const { createUser, updateUserProfile } = useAuth();
    const axiosPublic = useAxiosPublic();

    //navigate to login page 
    // let navigate = useNavigate()
    const { register, handleSubmit, formState: { errors } } = useForm()

    const onSubmit = (data) => {
        const { name, email, phone, password } = data;
        console.log(name, email, phone, password);

        if (password.length < 5) {
            return toast.error('your password should at least 5 character long');
        }
        if (!/^\d+$/.test(password)) {
            return toast.error('Your Pin should contain only numbers');
        }
        createUser(email, password)
            .then((result) => {
                console.log(result.user);
                const userInfo = { name, email, phone, password };

                axiosPublic.post('/save-user', userInfo)
                    .then((res) => {
                        console.log(res.data);
                    })
                    .catch((error) => {
                        console.log(error);
                    })
                // update user profile name and  phone number
                updateUserProfile(name, phone)
                    .then(() => console.log('profile updated'))
                    .catch((error) => {
                        console.log(error);
                    });
                // toast.success('User Created Successfully');
                return toast.success('user created successfully')
            })
            .catch((error) => {
                console.log(error.message);
                return toast.error('user all ready exists. please login')
            });
    };

    return (
        <div className="hero min-h-screen bg-purple-200" data-aos="zoom-in" data-aos-duration="1000">
            <div className="hero-content flex-col" data-aos="zoom-out" data-aos-delay="1500">
                <div className="text-center" data-aos="fade-right" data-aos-delay="2000">
                    <h1 className="text-5xl font-bold w-full">Register now!</h1>
                </div>
                <div className="card shrink-0 shadow-2xl bg-yellow-100">
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body" data-aos="fade-down" data-aos-delay="2500">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" placeholder="Name" className="input input-bordered" {...register("name", { required: true })} />
                                {errors.name && <span className="text-red-500">This field is required</span>}

                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" className="input input-bordered" {...register("email", { required: true })} />
                                {errors.email && <span className="text-red-500">This field is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Phone Number</span>
                                </label>
                                <input type="number" placeholder="Phone Number" className="input input-bordered" {...register("phone", { required: true })} />
                                {errors.phone && <span className="text-red-500">This field is required</span>}

                            </div>
                            <div className="form-control relative">
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
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn bg-violet-700/60">Register</button>
                        </div>
                        <p>All Ready Have An Account? <Link
                            className="underline" to="/login">Login</Link></p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;