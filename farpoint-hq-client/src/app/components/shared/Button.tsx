import React from 'react'
type classType = string | undefined | null
const Button = (props:any) => {
    let myCustomClass : classType  = "bg-black-200" + props?.customClass
  return (
    <button
      className={myCustomClass}
    >Button</button>
  )
}

export default Button