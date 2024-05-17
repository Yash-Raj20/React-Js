import React, { useState } from 'react'
import { useEffect } from 'react'

function Instagram() {
  const [data, setData] = useState([])
  useEffect(() => {
    fetch('https://api.github.com/users/Yash-Raj20')
    .then(response => response.json())
    .then(data => {
      setData(data)
    })
  }, [])
  return (
      <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>
      Instagram Followers:{data.Followers}
      <img src={data.avatar_url} alt="Git Picture" width={300} />
    </div>
  )
}

export default Instagram

