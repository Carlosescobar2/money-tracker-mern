import React from 'react'
import 'boxicons'
const obj = [
    { 
        name: "Savings",
        color:"rgb(255, 205, 86)",
    },
    {
        name: "Investment",
        color:"rgb(255, 99, 132)",

    }, 
    { 
        name: "Expense",
        color:"rgb(54, 162, 235)",
    }
]

const List = () => {
  return (
    <div className='flex flex-col py-6 gap-3'>
        <h1 className='py-4 text-md font-bold text-xl'>History</h1>
        {obj.map((v,i)=> <Transaction key={i} catergory={v}></Transaction>)}

    </div>
  )
}

function Transaction({catergory}){ 
    if(!catergory) return null;
    return( 
        <div className='item flex justify-center bg-gray-50 py-2 rounded-r' style={{borderRight: `8px solid ${catergory.color ?? "#e5e5e5"}`}}>
            <button className='px-3'><box-icon color={catergory.color ?? ''} size="15px" name="trash"></box-icon></button>
            <span className='block w-full'>{catergory.name ?? '#e5e5e5'}</span>
        </div>
    )
}

export default List