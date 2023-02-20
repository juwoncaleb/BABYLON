import React,{useState} from 'react'
import Link from 'next/link'

export default function job() {
 const [title, setTitle] = useState('')
 const [department, setDepartment] = useState('')
 const [location, setLocation] = useState('')
 const [salary, setSalary] = useState('')
 const [deadline, setDeadline] = useState('')
 const [description, setDescription] = useState('')


 // SEND JOB TO MONGODB THROUGH API
  //SEND TO MONGO DATA BASE
  const submitComment = async () => {
    // this is to find where we want to post int
    await fetch('/api/job', {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify({
          title,
          department,
          location,
          salary,
          deadline,
          description
        }),
    })


}

const refreshPage = () => {
  window.location.reload();
}
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
              <input value={title} onChange={(e) => setTitle(e.target.value)} type="text" id="title" name="title" />
            </div>
            <div className='grid'>
              <label for="department">Department</label>
              <input value={department} onChange={(e) => setDepartment(e.target.value)} type="text" id="department" name="department" />
            </div>
            <div className='grid'>
              <label for="location">Location</label>
              <input value={location} onChange={(e) => setLocation(e.target.value)} type="text" id="location" name="location" />
            </div>
            <div className='grid'>
              <label for="location">Salary</label>
              <input value={salary} onChange={(e) => setSalary(e.target.value)} type="text" id="location" name="location" />
            </div>
    
            <div className='grid'>
              <label for="deadline mb-10">Deadline</label>
              <input value={deadline} onChange={(e) => setDeadline(e.target.value)} type="date" id="deadline" name="deadline" />
            </div>
            <div className='grid mt-10'>
              <label for="description">Description</label>
              <textarea value={description} onChange={(e) => setDescription(e.target.value)} className='mb-10' id="description" name="description"></textarea>
            </div>
            <button onClick={()=>{submitComment(); refreshPage()}} type="submit mt-20 mb-10">Submit</button>
          </form>
        </div>
      </div>

    </div>
  )
}
