import React from 'react'

export default function TotalCard({ total }) {
    return (
        <div className='relative bg-blue-50 h-60 w-96 border-blue-300 border-2 border-r-2 flex flex-col gap-7 rounded items-center justify-center'>
            <div className='absolute top-2 left-2 text-sm text-gray-600 font-bold'>CASE ACCROSS INDIA</div>
            <div>
                <h1 className='text-3xl font-bold text-blue-500 border-b-2 border-b-slate-500'>{total?.active}</h1>
                <p className='text-center'>ACTIVE CASE</p>
            </div>
            <div className='flex gap-3'>

                <div className='flex flex-col gap-2 bg-amber-600 p-2 rounded'>
                    <div>TOTAL CASES</div>
                    <div className='font-bold'>{total?.confirmed}</div>
                </div>
                <div className='flex flex-col gap-2 bg-green-500 p-2 rounded'>
                    <div>DISCHARGED</div>
                    <div className='font-bold'>{total?.recovered}</div>
                </div>
                <div className='flex flex-col gap-2 bg-red-500 p-2 rounded'>
                    <div>DEATHS</div>
                    <div className='font-bold'>{total?.deaths}</div>
                </div>

            </div>

        </div>
    )
}
/*
active: '363849',
    confirmed: '32249900',
    deaths: '432112',
    deltaconfirmed: '24692',
    deltadeaths: '438',
    deltarecovered: '36862',
    lastupdatedtime: '13/08/2021 23:27:22',
    migratedother: '12679',
    recovered: '31441260',
    state: 'Total',
    statecode: 'TT',
    statenotes: ''
*/
