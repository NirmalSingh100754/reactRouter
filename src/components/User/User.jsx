import React from 'react'
import { useParams } from 'react-router-dom'
function User() {
    const { userId } = useParams()
  return (
    <>
      <h1 className='mx-auto w-full text-center bg-gray-600 text-3xl text-white p-4'>User: {userId}</h1>
    </>
  )
}

export default User
