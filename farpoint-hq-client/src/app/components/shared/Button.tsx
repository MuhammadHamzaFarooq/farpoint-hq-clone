import React from 'react'

export const Button = (props:{children: string}) => {
  return (
    <button className="transition duration-700 ease-in-out border-sky-200 bg-black text-white">{props.children}</button>
  )
}

