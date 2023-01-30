import React from 'react'

export default function Header() {
  return (
    <div className='flex mt-10 justify-between main_Header'>
      <img className='logo' src='./babylon.png' />
      <div className=' main_text flex'>
        <p className=' index'>Templates</p>
        <p  className=''>Pricing</p>
        <p  className=''>Blogs</p>
        <p  className=''>Support</p>

      </div>
      <p className=' main_text'>Sign In</p>
    </div>
  )
}
