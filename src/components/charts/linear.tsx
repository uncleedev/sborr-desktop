import { CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'

export default function LinearChart() {

    const data = [
        {
            name: 'Jan',
            resolution: 4000,
            memorandum: 3222,
            ordinance: 2400,
        },
        {
            name: 'Feb',
            resolution: 2992,
            memorandum: 2333,
            ordinance: 1232,
        },
        {
            name: 'March',
            resolution: 1233,
            memorandum: 3444,
            ordinance: 4342,
        },
        {
            name: 'April',
            resolution: 1234,
            memorandum: 2343,
            ordinance: 1234,
        },
    
    ];

  return (
    <ResponsiveContainer width={"100%"} height={"100%"}>
        <LineChart
            width={500}
            height={300}
            data={data}
            margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
            }}
        >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="ordinance" stroke="#326350" />
            <Line type="monotone" dataKey="resolution" stroke="#0D9112" activeDot={{ r: 8 }} />
            <Line type="monotone" dataKey="memorandum" stroke="#D3B574" />
        </LineChart>
    </ResponsiveContainer>
)
}
