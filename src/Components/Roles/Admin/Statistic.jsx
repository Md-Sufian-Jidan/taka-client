import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../Hooks/useAuth";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { Helmet } from "react-helmet-async";
import { FaUsers } from "react-icons/fa";
import { SlBookOpen } from "react-icons/sl";
import AdminChart from "../../Charts/AdminChart";
import { useState } from "react";
// import UseStatus from '../../../Hooks/useStatus'

const Statistic = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();
    // const [status] = UseStatus();
    // console.log(status);
    const [isLoading, setIsLoading] = useState(false)

    const { data: stat } = useQuery({
        queryKey: ['admin-stat'],
        queryFn: async () => {
            const { data } = await axiosSecure.get('/admin-statistic')
            return data;
        },
    });
    console.log(stat);

    const { data: chartData } = useQuery({
        queryKey: ['chart-data'],
        queryFn: async () => {
            const { data } = await axiosSecure.get('/admin-statistic')
            return data;
        },
    });

    if (isLoading) return <div className='text-5xl my-20'>Loading...</div>

    return (
        <>
            <Helmet>
                <title>Dashboard | Statistic</title>
            </Helmet>
            <div>
                <h2 className="my-3 md:text-2xl">Hi, Welcome Back, <span className="font-bold text-lime-500/60">{user?.displayName}</span> Sir</h2>
                {/* admin stat */}
                <div className="stats shadow w-full my-5">

                    <div className="stat">
                        <div className="stat-figure text-primary">
                            <FaUsers size={30} />
                        </div>
                        <div className="stat-title">Total Users</div>
                        <div className="stat-value text-primary">{stat?.totalUsers}</div>
                        {/* <div className="stat-desc">21% more than last month</div> */}
                    </div>

                    <div className="stat">
                        <div className="stat-figure text-secondary">
                            <SlBookOpen size={30} />
                        </div>
                        <div className="stat-title">Total Bookings</div>
                        <div className="stat-value text-secondary">{stat?.bookingDetails}</div>
                        {/* <div className="stat-desc">21% more than last month</div> */}
                    </div>

                    <div className="stat">
                        <div className="stat-figure text-secondary">
                            <div className="avatar ">
                                <div title={user?.displayName} className="w-16 rounded-full">
                                    <img src={user?.photoURL} />
                                </div>
                            </div>
                        </div>
                        <div className="stat-title">Total Sales</div>
                        <div className="stat-value">${stat?.totalSales}</div>
                        {/* <div className="stat-desc text-secondary">31 tasks remaining</div> */}
                    </div>

                </div>
            </div>
            <AdminChart chartData={chartData} />
        </>
    );
};

export default Statistic;