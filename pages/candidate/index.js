import DashboardHeader from 'components/DashboardHeader'
import React from 'react'
import Link from 'next/link'

export default function index() {
  return (
    <div className='candidatelemet'>
      <DashboardHeader />
      <div className='candidaTab'>
        {/* <div className='flex justify-center mt-14 '>
          <form className='mb-10'>
            <input type="text" placeholder="Search..." />
            <button type="submit"><i class="fa fa-search"></i></button>
          </form>
          <select className='dropDown mb-10'>
            <option value="actual value 1">Job</option>
            <option value="actual value 2">Display Text 2</option>
            <option value="actual value 3">Display Text 3</option>
          </select>

          <select className='dropDown mb-10'>
            <option value="actual value 1">Status</option>
            <option value="actual value 2">Closed</option>
            <option value="actual value 2">Closed</option>

          </select>
          <select className='dropDown mb-10'>
            <option value="actual value 1">Name </option>
            <option value="actual value 2">Older</option>
            <option value="actual value 2">Older</option>

          </select>
          <select className='dropDown mb-10'>
            <option value="actual value 1">Created </option>
            <option value="actual value 2">Older</option>
            <option value="actual value 2">Older</option>

          </select>

          <button className='jobButton mb-10'>
            <Link href="/new" >
              +  Add candidate
            </Link>
          </button>
        </div> */}
        <p className='AllCandidates ml-1'>Candidates</p>
      </div>
      <div className='candidateTable'>
        <div className='candidateHead flex justify-around'>
          <p className='mt-2'>Candidate</p>
          <p className='mt-2'>Job</p>
          <p className='mt-2'>Stage</p>
          <p className='mt-2'>Created Date</p>


        </div>
        <div className=' grid justify-center mt-40'>
          <p className='noJob'>No Candidate Created </p>
          <img className='file' src='relax.png' />

        </div>
      </div>
    </div>
  )
}
