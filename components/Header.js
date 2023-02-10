import React from 'react'

export default function Header() {
  return (
    <div className='flex mt-10 justify-between main_Header'>
      <img className='logo' src='./babylon.png' />
      <div className=' main_text flex mt-6'>
        <p className='mr-6 '>Templates</p>
        <p  className='mr-6'>Pricing</p>
        <p  className='mr-6'>Blogs</p>
        <p  className='mr-6'>Support</p>

      </div>
      <p className=' main_text mt-6'>Sign In</p>
    </div>
  )
}
