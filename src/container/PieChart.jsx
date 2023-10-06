import React from 'react'
import { PolarArea } from "react-chartjs-2";
import {Chart} from "chart.js/auto";
import { CategoryScale } from "chart.js";

Chart.register(CategoryScale);
const PieChart = ({chartData}) => {
  return (
    <div className='h-44 w-full rounded  border-2 border-r-2 flex flex-col p-2 relative' >
       <PolarArea data={chartData} options={{
          plugins: {
            title: {
              display: true,
              text: "Users Gained between 2016-2020"
            },
            legend: {
              display: false
            }
          }
        }}/>
       <p className='absolute right-16 top-10'><span className='text-3xl font-bold'>68%</span>
       <br /><span className='text-blue-400'>blue</span>
       </p>
    </div>
  )
}

export default PieChart
