import React from 'react'
import Link from 'next/link'

export default function blank() {
  return (
    <div className='blank'>
      <div className='mainBlankPage'>
        <div className='flex justify-around '>
          <div className='mt-6'>
            <p className='StageNumber'>1</p>
            <p>Interview Type</p>
          </div>
          <div className='mt-6'>
            <p className='StageNumber'>2</p>
            <p>Details</p>
          </div>
          <div className='mt-6'>
            <p className='StageNumber'>3</p>
            <p>Preview</p>
          </div>


        </div>

        <div className='interviewType'>
          <p className='interviewTypeHeader'>Choose interview type</p>
          <p className='subb'>Select interview type to reveal specifically designed template details.</p>

          <div className='flex gap-6 justify-around mt-14'>
            <Link href='./det'>
              <div className='cardfd'>
                <img className='coding' src='/code.png' />
                <p>Live Coding Challenge</p>
                <p>Evaluate candidates' code across several criteria</p>
                <img />

              </div>
            </Link>
            <Link href="takeHome">

              <div className='cardfd'>
                <img className='mailandtalk' src='/mail.png' />
                <p>Take Home Assignment</p>
                <p>Ask canndidate to complete an assignment </p>
                <p>and return the results.</p>
                <img />

              </div></Link>

            <div >
              <div className='cardfd'>
                <img className='mailandtalk' src='/beh.png' />

                <p>Technical Q/A</p>
                <p>Ask questions from different competence areas..</p>
              </div>

              <img />

            </div>
          </div>
        </div>
      </div>

    </div>
  )
}
