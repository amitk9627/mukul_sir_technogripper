import React from 'react'
import boy from '../boy.png'
const AibotCard = () => {
    return (
        <div className='h-96 w-full aibot rounded-2xl relative'>
            <p className='absolute z-10 text-2xl w-48 font-extrabold top-10 left-16'>Unlock Pro Insights<br /><br />
            <button className='bg-black text-white p-2 rounded-xl px-4'>Check</button></p>
           <img src={boy} alt="boy" 
           className='absolute bottom-16 left-24 h-96 w-auto'/>
            <div className='flex items-center justify-around bg-white h-20 w-88 absolute bottom-4 left-4 right-4 rounded-3xl'>
                <div className=''>
                    <div className='text-sm font-bold'>Active Case</div>
                    <div className='text-center mt-2 text-2xl font-bold'>678<span className='text-sm text-green-500 ml-1'>32%</span></div>
                </div>
                <div>
                    <div className='text-sm font-bold'>New</div>
                    <div className='text-center mt-2 text-2xl font-bold'>256
                    <span className='text-sm text-red-500 ml-1'>32%</span></div>
                </div>
                <div>
                    <div className='text-sm font-bold'>Death</div>
                    <div className='text-center mt-2 text-2xl font-bold'>12<span className='text-sm text-red-500 ml-1'>32%</span></div>
                </div>

            </div>
        </div>
    )
}

export default AibotCard
