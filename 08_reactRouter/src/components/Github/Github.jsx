import React from 'react'
import { useState,useEffect } from 'react'

function Github() {
    const [data,setData] = useState({});
    useEffect(()=>{
        fetch('https://api.github.com/users/SenaAshu')
        .then(res => res.json())
        .then(data => {
            console.log(data);
            setData(data);
        })
        
    },[])
  return (
    <div className='flex flex-col items-center justify-center bg-gray-600 h-screen'>
        <img className='rounded-full' src={data?.avatar_url} alt="image"/>
        <div className='bg-slate-400 m-3 text-2xl text-white p-4 rounded-full'>Total Followers: {data.followers}</div>
    </div>
  )
}

export default Github
