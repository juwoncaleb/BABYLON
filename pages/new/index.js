import React from 'react'
import Link from 'next/link'

export default function job() {
  return (
    <div className='joob'>
      <div className='newJob'>
        <p className='createJob  '>Create new job</p>

     

        <p className='fillForm  mt-20'>Fill out details</p>
        <p className='fillForm mt-4'>Target the right candidate , write down job detail information</p>

        <div className='formInput flex justify-center mt-14'>
          <form className='grid '>
            <div className='grid widOfJob'>
              <label for="header">Header:</label>
              <input type="text" id="header" name="header" />
            </div>
            <div className='grid'>
              <label for="title">Title:</label>
              <input type="text" id="title" name="title" />
            </div>
            <div className='grid'>
              <label for="department">Department:</label>
              <input type="text" id="department" name="department" />
            </div>
            <div className='grid'>
              <label for="location">Location:</label>
              <input type="text" id="location" name="location" />
            </div>
            <div className='grid'>
              <label for="deadline mb-10">Deadline:</label>
              <input type="date" id="deadline" name="deadline" />
            </div>
            <div className='grid mt-10'>
              <label for="description">Description:</label>
              <textarea id="description" name="description"></textarea>
            </div>
            <button type="submit mt-10">Submit</button>
          </form>
        </div>
      </div>

    </div>
  )
}
