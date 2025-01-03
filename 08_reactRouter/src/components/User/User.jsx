import React from 'react'
import {useParams} from 'react-router-dom'

function User() {
    const {userID} = useParams()
  return (
    <>
        <div className='bg-slate-900 text-yellow-200 text-3xl rounded-3xl flex justify-center items-center'>User: {userID}</div>
    </>
  )
}

export default User
