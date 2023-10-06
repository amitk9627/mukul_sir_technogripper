import { useEffect, useState } from 'react';
import './App.css';
import PieChart from './container/PieChart';
import BarChart from './container/BarChart';
import SingleState from './container/SingleState';
import AibotCard from './container/AibotCard';
import Navbar from './container/Navbar';

import { UserData } from './container/Data'

function App() {
  const [userData, satUserData] = useState({
    labels: UserData.map(data => data.year),
    datasets: [{
      label: "Users Gained",
      data: UserData.map((data) => data.userGain),
      backgroundColor: [
        "#f3ba2f",
        "#dc000c",
        "#f3ba2f",
        "#dc000c",
        "#f3ba2f"
      ]
    }]
  })
  const [usata, satata] = useState({
    labels: [
      'Red',
      'Green',
      'Yellow',
      'Grey',
      'Blue'
    ],
    datasets: [{
      label: 'My First Dataset',
      data: [11, 16, 7, 3, 14],
      backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(75, 192, 192)',
        'rgb(255, 205, 86)',
        'rgb(201, 203, 207)',
        'rgb(54, 162, 235)'
      ]
    }]
  })
  const [statex, setState] = useState([]);
  useEffect(() => {
    (async () => {

      const response = await fetch('https://corona-virus-world-and-india-data.p.rapidapi.com/api_india', {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': '560ad52dbamshde548c909e1d593p18c547jsna38c1fbc8421',
          'X-RapidAPI-Host': 'corona-virus-world-and-india-data.p.rapidapi.com'
        }
      });
      const result = await response.json();

      const res = result?.state_wise;
      if (res) {
        setState(Object.values(res))
      }
    })()
  }, [])

  return (
    <div className="" >
      <div className='h-full w-full mb-16'>
        <Navbar />
        <div className='flex  max-md:flex-col items-center justify-center gap-16 m-5'>
          <div style={{ width: "50%" }}>
            <AibotCard />
          </div>
          <div >
            <BarChart chartData={userData} />
            <PieChart chartData={usata} />
          </div>
        </div>
        <div className='border-2 rounded px-10 mx-10'>
          <div className='flex items-center justify-between border-b p-2 text-xl'>
            <span>state</span>
            <span>name</span>
            <span>field</span>
            <span>xyzabcd</span>
          </div>
          <div className='flex items-center justify-between font-bold border-b p-2 text-xl'>
            <span>state</span>
            <span>name</span>
            <span>field</span>
            <span>xyzabcd</span>
          </div>
          <div className='flex items-center justify-between font-bold border-b-2 border-b p-2 text-xl'>
          <span>state</span>
          <span>name</span>
          <span>field</span>
          <span>xyzabcd</span>
        </div>
        </div>
        
      </div>
      <hr />
      <div className='flex justify-center p-2'>
        <table className='border-2 p-8 rounded-lg'>
          <thead className='hover:bg-transparent m-4'>
            <tr >
              <th>State</th>
              <th>Active</th>
              <th>Deaths</th>
              <th>Recovered</th>
              <th>Updated Time</th>
            </tr>
          </thead>

          <tbody>
            {
              statex.map((item, i) => <SingleState index={i} states={item} />)
            }


          </tbody>

        </table>
      </div>


    </div>
  );
}

export default App;
