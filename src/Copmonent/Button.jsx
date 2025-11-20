import React from 'react'


function Button({title = "Check it Out"}) {
  return (
    <div className='w-fit px-4 py-2 bg-zinc-100 text-black rounded-full cursor-pointer hover:bg-gray-800 hover:text-white '>
        <a href="https://www.behance.net/abhushekanand">
        <span className='text-sm font-medium'>{title}</span>
      </a>
    </div>
  )
}

export default Button