import React from 'react'
import Link from 'next/link'
import DashboardHeader from 'components/DashboardHeader'

export default function index() {
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
                        <Link href="/new" >
                            +  Create an Interview
                        </Link>
                    </button>
                </div>
                <p className='intervo'>Interview</p>
                <div className='flex mt-8 '>
                    <p>Current</p>
                    <p className='ml-14'>Completed</p>

                </div>

                <div className='interviewFrame'>

                </div>
            </div>

        </div>
    )
}
let person = {
    name: "Bob",
    age: 30,
    sayName: function() {
      console.log("My name is " + this.name);
    }
  };
  
  let student = {
    major: "Computer Science",
    year: "Junior"
  };
  
  student.__proto__ = person; // Set the prototype of student to person
  
  console.log(student.name); // Output: "Bob"
  student.sayName(); // Output: "My name is Bob"

  











  let parent = {
    name: "Bob",
    age: 30,
    sayName: function() {
      console.log("My name is " + this.name);
    }
  };
  
  let child = Object.create(parent); // Create a new object that inherits from parent
    child.name = "Alice"; // Override the name property on child
  
  console.log(child.name); // Output: "Alice"
  child.sayName(); // Output: "My name is Alice"
  console.log(child);

  