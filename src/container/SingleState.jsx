import React from 'react'

const SingleState = ({index,states}) => {
  let bg = Number(index)%2===0 ? "gray":"white";
  
  return (
    <tr id={bg} key={index} className='h-12 hover:bg-amber-800 mt-10 '>

      <td>{states?.state}</td>
      <td>{states.active}</td>
      <td>{states.deaths}</td>
      <td>{states.recovered}</td>
      <td>{states.lastupdatedtime}</td>

    </tr>
  )
}

export default SingleState
/*
active: '',
      confirmed: '5',
      : '135139',
      deltaconfirmed: '4145',
      deltadeaths: '100',
      deltarecovered: '5811',
      : '',
      migratedother: '3470',
      : '',
      state: '',
      statecode: 'MH',
*/