import React, { useState } from 'react'
import { Responsive as ResponsiveGridLayout } from "react-grid-layout";
import Job from 'Model/Job'
import dbConnect from 'utils/Mongo'
import Link from 'next/link'


export default function data({ eachJobs }) {
  const [selectedButton, setSelectedButton] = useState(null);

  console.log(eachJobs);
  const layout = [
    { i: "a", x: 0, y: 0, w: 1, h: 2, },
    { i: "b", x: 1, y: 0, w: 3, h: 2, },
    { i: "c", x: 4, y: 0, w: 1, h: 2 }
  ];
  return (
    <div className='eachjobs mb-4'>
      <div className='title-container '>
        <p className='title'>{eachJobs.title}</p>
      </div>
      <div className='flex toptunnel justify-center'>

        <button className='mr-14 ml-14 tunnel' onClick={() => setSelectedButton(1)}>Details</button>
        <button className='mr-14 ml-14 tunnel' onClick={() => setSelectedButton(2)}>Pipline</button>
        <button className='mr-14 ml-14 tunnel' onClick={() => setSelectedButton(3)}>Candidate</button>
        <button className='mr-14 ml-14 tunnel' onClick={() => setSelectedButton(4)}>Decesions</button>


      </div>
      {/* DETAILS */}
      {selectedButton === 1 ? <div>

        <div className=''>
          <p>{eachJobs.title}</p>
        </div>
        <div>$ {eachJobs.salary}</div>
      </div> : null}




      {/* PIPLINE */}
      {selectedButton === 2 ? <div> <ResponsiveGridLayout
        className="layout  "
        layout={layout}
        breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
        cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}
        rowHeight={30}
        width={1200}
      >
        <div key="a">a</div>
        <div key="b">b</div>
        <div key="c">c</div>
      </ResponsiveGridLayout>
      </div> : null}




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
