import React from 'react'
import { Responsive as ResponsiveGridLayout } from "react-grid-layout";
import Job from 'Model/Job'
import dbConnect from 'utils/Mongo'

export default function data({newJobs}) {
  console.log(newJobs);
  const layout = [
    { i: "a", x: 0, y: 0, w: 1, h: 2, },
    { i: "b", x: 1, y: 0, w: 3, h: 2, },
    { i: "c", x: 4, y: 0, w: 1, h: 2 }
  ];
  return (
    <div>
      <p>{newJobs.title}</p>
      <ResponsiveGridLayout
        className="layout"
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
    </div>
  )
}


export const getServerSideProps = async () => {
  try {
    await dbConnect();
    console.log("fetching data");
    const allJobs = await Job.find();
    console.log("data fetched");
    return {
      props: {
        newJobs: JSON.parse(JSON.stringify(allJobs)),
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

