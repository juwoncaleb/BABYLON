import React, { useState } from 'react'
import GridLayout from "react-grid-layout";
import Job from 'Model/Job'
import dbConnect from 'utils/Mongo'
import Link from 'next/link'
import { useSelector } from 'react-redux'
import { addCandidate } from 'redux/pipline'


export default function data({ eachJobs }) {
  const [selectedButton, setSelectedButton] = useState(null);
  const { selectCandidate } = useSelector(state => state.entry)
  console.log(selectCandidate);
  console.log("Added to redux");
  const [layout, setLayout] = useState([
    { i: '1', x: 0, y: 0, w: 2, h: 2 },
    { i: '8', x: 0, y: 1, w: 2, h: 2 },
    { i: '2', x: 2, y: 0, w: 2, h: 2 },
    { i: '3', x: 4, y: 0, w: 2, h: 2 },
    { i: '4', x: 6, y: 0, w: 2, h: 2 },
    { i: '5', x: 8, y: 0, w: 2, h: 2 },
  ]);

  const onLayoutChange = (layout) => {
    setLayout(layout);
  };



  return (
    <div className='eachjobs mb-4'>
      <div className='title-container '>
        <p className='title'>{eachJobs.title}</p>
      </div>
      <div>
        hjklkfsd
        {selectCandidate.map((candidatez) => (
          <p key={candidatez.nam}>
            {candidatez.nam}
           hello</p>
        ))}
      </div>
      <div className='flex toptunnel justify-center'>

        <button className='mr-14 ml-14 tunnel' onClick={() => setSelectedButton(1)}>Details</button>
        <button className='mr-14 ml-14 tunnel' onClick={() => setSelectedButton(2)}>Pipline</button>
        <button className='mr-14 ml-14 tunnel' onClick={() => setSelectedButton(3)}>Candidate</button>
        <button className='mr-14 ml-14 tunnel' onClick={() => setSelectedButton(4)}>Decesions</button>


      </div>
      {/* DETAILS */}
      {selectedButton === 1 ? <div>

        <div className='flex justify-around mt-10'>
          <p>{eachJobs.title}</p>
          <p>Edit</p>
        </div>
        <div className='flex justify-around'>
          <p>$ {eachJobs.salary}</p>
          <p>Edit</p>
        </div>
        <div className='flex justify-around'><p>{eachJobs.deadline}</p> <p>Edit</p></div>
        <div className='flex justify-around'><p>{eachJobs.location}</p> <p>Edit</p></div>
        <div className='flex justify-around'><p>{eachJobs.department}</p> <p>Edit</p></div>
      </div> : null}




      {/* PIPLINE */}
      {selectedButton === 2 ?
       <div className='sta'>
        <div className='flex justify-around  stages'>
          <p>Phone Screen</p>
          <p>Technical</p>
          <p>Cultural</p>
          <p>Behavorial</p>
          <p>Offer</p>
        </div>
        <hr className='pipe'/>

        <GridLayout
          className="layout"
          layout={layout}
          cols={12}
          rowHeight={100}
          width={1200}
          onLayoutChange={onLayoutChange}
          draggableHandle=".handle"
        >
          <div key="1" className="box">
            <div className="handle">Drag from here</div>
            Box 1
            <Link href='/job/modal'>
              <p className='text-4xl'>+</p>

            </Link>
          </div>
          <div key="8" className="box">
            <div className="handle">Drag from here</div>
            BoL;';x 1
            <Link href='/job/modal'>
              <p className='text-4xl'>+</p>

            </Link>
          </div>
          <div key="2" className="box">
            <div className="handle">Drag from here</div>
            Box 2
          </div>
          <div key="3" className="box">
            <div className="handle">Drag from here</div>
            Box 3
          </div>
          <div key="4" className="box">
            <div className="handle">Drag from here</div>
            Box 4
          </div>
          <div key="5" className="box">
            <div className="handle">Drag from here</div>
            Box 5
          </div>
        </GridLayout>
      </div>

       :null}




      {/* CANDIDATE */}
      {selectedButton === 3 ? <div>Div 3</div> : null}






      {/* DECISION */}
      {selectedButton === 4 ? <div>Div 4</div> : null}
    </div>
  )
}


export const getServerSideProps = async ({ query }) => {
  //id of each job 
  const { id } = query
  console.log(id);
  try {
    await dbConnect();
    const Jobs = await Job.findById(id)
    return {
      props: {
        eachJobs: JSON.parse(JSON.stringify(Jobs)), // <== here is a solution

      },
    };
  } catch (error) {
    console.error(error);
    return {
      props: {
        comfort: [],
      },
    };
  }
};
