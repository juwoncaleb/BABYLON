import React from 'react'
import Link from 'next/link'

export default function DashboardHeader() {
  return (
    <div>
      <div className='flex justify-center '>

        <Link href="/job" >
          <p className='mt-10 cursor-pointer'>Job</p>
        </Link>

        <Link href="/candidate" >
        <p className='mt-10 ml-10 cursor-pointer'>Candidate</p>
        </Link>
        <p className='mt-10 ml-10'>Feedback</p>
        <Link href="/Dashboard" >
        <img className=' logo ml-10 mt-4' src='./babylon.png' />
        </Link>
        <Link href="/interview" >
        <p className='mt-10 ml-10'>Interview</p>
        </Link>
        <Link href="/template" >
        <p className='mt-10 ml-10'>Templates</p>
        </Link>
        <p className='mt-10 ml-10'>Profile</p>

      </div>
    </div>
  )
}

