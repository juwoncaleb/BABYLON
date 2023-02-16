import DashboardHeader from 'components/DashboardHeader'
import React from 'react'
import Link from 'next/link'


export default function index() {
    return (
        <div className='job'>
            <DashboardHeader />
            <div className='jobMarket mt-14 '>
                <div className='flex justify-center '>
                    <form className='mb-10'>
                        <input type="text" placeholder="Search..." />
                        <button type="submit"><i class="fa fa-search"></i></button>
                    </form>
                    <select className='dropDown mb-10'>
                        <option value="actual value 1">Department</option>
                        <option value="actual value 2">Display Text 2</option>
                        <option value="actual value 3">Display Text 3</option>
                    </select>
                    <select className='dropDown mb-10'>
                        <option value="actual value 1">Owner</option>

                    </select>
                    <select className='dropDown mb-10'>
                        <option value="actual value 1">Status</option>
                        <option value="actual value 2">Closed</option>
                        <option value="actual value 2">Closed</option>

                    </select>
                    <select className='dropDown mb-10'>
                        <option value="actual value 1">Order </option>
                        <option value="actual value 2">Older</option>
                        <option value="actual value 2">Older</option>

                    </select>

                    <button className='jobButton mb-10'>
                        <Link href="/new" >
                            +  Create Job
                        </Link>
                    </button>
                </div>
                <div className=' grid justify-center mt-40'>
                    <p className='noJob'>No Job Created </p>
                    <img className='file' src='file.png' />

                </div>
            </div>
        </div>
    )
}
