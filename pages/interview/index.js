import React, { useState } from 'react'
import Link from 'next/link'
import DashboardHeader from 'components/DashboardHeader'

export default function index() {
  const [current, setCurrent] = useState(false)
  return (
    <div className='interview'>
      <DashboardHeader />
      <div className='interviewBody'>
        <div className='flex justify-between mt-14'>
          <form className='mb-10'>
            <input type="text" placeholder="Search..." />
            <button type="submit"><i class="fa fa-search"></i></button>
          </form>



          <button className='jobButton mb-10'>
            <Link href="/interview/new" >
              +  Create an Interview
            </Link>
          </button>
        </div>
        <p className='intervo'>Interview</p>
        <div className='flex mt-8 cursor-pointer'>
          <p onClick={() => {
            setCurrent(false)
          }}>Current</p>
          <p onClick={() => {
            setCurrent(true)
          }} className='ml-14 cursor-pointer'>Completed</p>

        </div>

        <div className='interviewFrame'>
          {/* Current */}
          {current ? (
            <div>
              <div>
                <div className='flex justify-between mt-2 mb-2 ml-4 mr-4'>
                  <p>CANDIDATE</p>
                  <p>INTERVIEW</p>
                  <p>DATE</p>
                  <p className='interviewer'>INTERVIEWER</p>
                  <p className='ml-14'>SCORE</p>
                  <p>COMPETENCE</p>
                  <p>DECESION</p>
                </div>
                <hr className='borderLine' />
              </div>
              <div>
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

              </div>
              <div>
                <div className='flex justify-between mt-6 mb-2 ml-4 mr-4'>
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

              </div>
              <div>
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

              </div>
            </div>
          ) : (
            <div>
              <div className='mt-4'>
                <div className='flex justify-between mb-2 ml-6 mr-6 currentInterview'>
                  {/* DATE */}
                  <div className=''>
                    <p>16th</p>
                    FEB
                  </div>
                  {/* TIME AND TYPE OF INTEVIEW */}
                  <div>
                    <p>21:45 - 22:45</p>
                    <p>Software Engineer</p>
                  </div>
                  {/* CANDIDATE */}
                  <div>
                    <p>John</p>

                  </div>
                  {/* TYPE OF INTERVIEW */}
                  <div>
                    <p>Curlural</p>
                  </div>
                  {/* STAGE */}
                  <div>
                    <p>InProgress</p>
                  </div>
                </div>
                <hr className='borderLine' />
              </div>

              <div className='mt-4'>
                <div className='flex justify-between mb-2  ml-6 mr-6 currentInterview'>
                  {/* DATE */}
                  <div className=''>
                    <p>16th</p>
                    FEB
                  </div>
                  {/* TIME AND TYPE OF INTEVIEW */}
                  <div>
                    <p>21:45 - 22:45</p>
                    <p>Software Engineer</p>
                  </div>
                  {/* CANDIDATE */}
                  <div>
                    <p>John</p>

                  </div>
                  {/* TYPE OF INTERVIEW */}
                  <div>
                    <p>Curlural</p>
                  </div>
                  {/* STAGE */}
                  <div>
                    <p>InProgress</p>
                  </div>
                </div>
                <hr className='borderLine' />
              </div>
            </div>)
          }

          {/* Completed */}

        </div>
      </div>

    </div>
  )
}
