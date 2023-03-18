import React from 'react';
import { ResponsiveContainer, Area, ComposedChart } from 'recharts';
import PropTypes from 'prop-types';

export default function CoinAreaChart({ isUpTrend }) {
  const data = [
    { name: "Page A", uv: 4000, pv: 2400, amt: 2400 },
    { name: "Page B", uv: 3000, pv: 1398, amt: 2210 },
    { name: "Page C", uv: 2000, pv: 9800, amt: 2290 },
    { name: "Page D", uv: 2780, pv: 3908, amt: 10000 },
    { name: "Page E", uv: 1890, pv: 4800, amt: 2181 },
    { name: "Page F", uv: 2390, pv: 3800, amt: 2500 },
    { name: "Page G", uv: 3490, pv: 4300, amt: 2100 }
  ];

  return (
    <ResponsiveContainer
    width="98%"
      height={280}
    >
      <ComposedChart
        data={data}
      >
        <defs>
          <linearGradient id="colorUptrend" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#5FDF92" stopOpacity={1} />
            <stop offset="95%" stopColor="#5FDF92" stopOpacity={0} />
          </linearGradient>
          <linearGradient id="colorDowntrend" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#FFBDBD" stopOpacity={1} />
            <stop offset="95%" stopColor="#FFBDBD" stopOpacity={0} />
          </linearGradient>
        </defs>
        <Area
          type="natural"
          dataKey="uv"
          stroke={isUpTrend ? '#28C165' : '#F4574D'}
          strokeWidth="2"
          fill={`url(#${isUpTrend ? 'colorUptrend' : 'colorDowntrend'})`}
        />
      </ComposedChart>
    </ResponsiveContainer>
  );
}

CoinAreaChart.propTypes = {
  isUpTrend: PropTypes.bool
};