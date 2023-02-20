import React,{useState} from 'react'
import Link from 'next/link'

export default function job() {
  const [stocks, setStocks] = useState('')
  let j = typeof(stocks)
  console.log(j);

  return (
    
    <div className='joob'>
      <div className='newJob'>
        <p className='createJob  '>Create new job</p>

     

        <p className='fillForm  mt-20'>Fill out details</p>
        <p className='fillForm mt-4'>Target the right candidate , write down job detail information</p>

        <div className='formInput flex justify-center mt-14'>
          <form className='grid '>
         
            <div className='grid'>
              <label for="title">Title:</label>
              <input type="text" id="title" name="title" />
            </div>
            <div className='grid'>
              <label for="department">Department</label>
              <input type="text" id="department" name="department" />
            </div>
            <div className='grid'>
              <label for="location">Location</label>
              <input type="text" id="location" name="location" />
            </div>
            <div className='grid'>
              <label for="location">Salary</label>
              <input type="text" id="location" name="location" />
            </div>
    
            <div className='grid'>
              <label for="deadline mb-10">Deadline</label>
              <input value={stocks} onChange={(e) => setStocks(e.target.value)} type="date" id="deadline" name="deadline" />
            </div>
            <div className='grid mt-10'>
              <label for="description">Description</label>
              <textarea className='mb-10' id="description" name="description"></textarea>
            </div>
            <button type="submit mt-20 mb-10">Submit</button>
          </form>
        </div>
      </div>

    </div>
  )
}
