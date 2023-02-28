import DashboardHeader from 'components/DashboardHeader'
import React, { useState } from 'react'
import Link from 'next/link'
import Candidate from 'Model/Candidate';
import dbConnect from 'utils/Mongo'


export default function index({ newCandidate }) {
  const [isCandidate, setIsCandidate] = useState(false)
  if (newCandidate && newCandidate.length === 0) {
    setIsCandidate(true)
  }

  console.log(newCandidate);
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
            <Link href="/candidate/employee" >
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
        {isCandidate ? (<div className=' grid justify-center mt-40'>
          <p className='noJob'>No Candidate Created </p>
          <img className='file' src='relax.png' />

        </div>) : (<div>

          <div className='flex justify-between mt-6  mb-2 ml-4 mr-4'>
            <p>JUWON</p>
            <p>Software Engineer </p>
            <p>Tuesday </p>
            <p>JC </p>
            <p>70 </p>
            <div className='flex justify-center mr-4'>
              <div className='green'></div>
              <div className='green'></div>
              <div className='red'></div>

            </div>
            <p>YES</p>
          </div>
          <hr className='borderLine' />

        </div>)}
      </div>


    </div>
  )
}


export const getServerSideProps = async () => {
  try {
    await dbConnect();
    console.log("fetching data");
    const allCandidate = await Candidate.find();
    console.log("Candidate fetched");
    return {
      props: {
        newCandidate: JSON.parse(JSON.stringify(allCandidate)),
      },
    };
  } catch (error) {
    console.log("cant fetch");
    return {
      props: {
        comfort: [],
      },
    };
  }
};

