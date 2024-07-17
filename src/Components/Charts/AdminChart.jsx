import PropTypes from 'prop-types'
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Legend, } from 'recharts';
const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];

const data = [
    {
        name: 'Page A',
        uv: 4000,
        pv: 2400,
        amt: 2400,
    },
    {
        name: 'Page B',
        uv: 3000,
        pv: 1398,
        amt: 2210,
    },
    {
        name: 'Page C',
        uv: 2000,
        pv: 9800,
        amt: 2290,
    },
    {
        name: 'Page D',
        uv: 2780,
        pv: 3908,
        amt: 2000,
    },
    {
        name: 'Page E',
        uv: 1890,
        pv: 4800,
        amt: 2181,
    },
];

const getPath = (x, y, width, height) => {
    return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
    ${x + width / 2}, ${y}
    C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
    Z`;
};

const TriangleBar = (props) => {
    const { fill, x, y, width, height } = props;
    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};
// pie chart imports here
import { PieChart, Pie, } from 'recharts';
const COLORS = ['#BC5A94', '#E88D67', '#006989', '#FF8042'];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
        <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
            {`${(percent * 100).toFixed(0)}%`}
        </text>
    );
};
const AdminChart = ({ chartData }) => {
    // console.log(chartData.mostlyBooked);
    const mostBooked = chartData?.mostlyBooked;
    const pieData = chartData?.pieData;
    // console.log(mostBooked);
    return (
        <div className='my-5'>
            <div className="md:flex">
                <PieChart width={400} height={300}>
                    <Pie
                        data={pieData}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        label={renderCustomizedLabel}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                    >
                        {pieData?.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                    </Pie>
                    <Legend></Legend>
                </PieChart>
                <div className='mt-20 space-y-3 font-semibold'>
                    <p>1) Keep pushing forward! Every step brings us closer to success</p>
                    <p>2) Progress is power. Let is turn those pending tasks into delivered successes!</p>
                    <p>3) Stay focused and persistent. Together, we can achieve anything!</p>
                    <p>4) Each completed task is a victory. Let is keep the momentum going!</p>
                </div>
            </div>
            {/* bar chart here? */}
            <BarChart
                width={1000}
                height={300}
                data={mostBooked}
                margin={{
                    top: 20,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="testCategory" />
                <YAxis />
                <Bar dataKey="mostBooked" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
                    {mostBooked?.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={colors[index % 20]} />
                    ))}
                </Bar>
            </BarChart>
            {/* pie chart here? */}

        </div>
    );
};

AdminChart.propTypes = {
    chartData: PropTypes.object,
}
export default AdminChart;