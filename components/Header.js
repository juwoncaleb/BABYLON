import React from 'react'
import { useRouter } from 'next/router'

export default function Header() {
  const router = useRouter()

  return (
  <div>
     <div className='head '>
          <div className='flex  justify-between main_Header'>
            <img className='logo mt-10 mb-24' src='./babylon.png' />
            <div className=' main_text flex mt-6'>
              <p className='mr-8 mt-10 mb-24 '>Templates</p>
              <p className='mr-8 mt-10 mb-24'>Pricing</p>
              <p className='mr-8 mt-10 mb-24'>Blogs</p>
              <p className='mr-8 mt-10 mb-24'>Support</p>

            </div>
            <p  onClick={() => {
                    router.push('/auth');
                }} className='cursor-pointer main_text mt-14 mb-24'>Sign In</p>
          </div>
        </div>
  </div>
  )
}
