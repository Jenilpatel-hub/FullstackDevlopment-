import React from 'react'

function Practical_7() {
    const fruits =["Apple","Banana","Mango","Orange"];

  return (
    <ul>
        {fruits.map((fruits,index) => (
            <li key={index}>{fruits}</li>
        ))}
    </ul>
  )
}

export default Practical_7