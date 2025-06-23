import React, { useEffect, useState } from 'react'

function Github() {

    const [data,setData] =useState([])
    useEffect(() => 
      {
        fetch('https://api.github.com/users/NirmalSingh100754')
        .then(res=>res.json()).then(data => {setData(data)
            console.log(data)
        })
      }, [])
    
  return (
    <div className='text-center text-3xl bg-gray-600 text-white p-4'>
      Github followers: {data.followers}
      <img src={data.avatar_url} alt="git picture" width={300} />
    </div>
  )
}

export default Github
