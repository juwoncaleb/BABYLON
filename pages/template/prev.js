import React, { useState } from 'react'

export default function prev() {
    return (
        <div className='prev'>
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
            <p className='interviewTypeHeader'>Preview</p>
            <p className='subb'>Confirm all details are correct.</p>


            <div className='preview'>
                <div className='flex justify-around gap-10'>
                    <div className='reminder'>
                        <p className='check ml-6 mt-6'>Interview reminders</p>


                    </div>

                    <div className='checklist'>
                        <p className='ml-6 mt-6'>Checklist</p>

                    </div>
                </div>

                <div className='mt-8'>
                    <p className='check '>Questions</p>

                    <div className='questions '>
                        <div className='mt-4 flex justify-between '>
                            <p className=' ml-4 mb-4'>empathy (0 questions)</p>
                            <img className='dotss' src="https://img.icons8.com/external-tal-revivo-color-tal-revivo/24/null/external-ellipsis-horizontal-menu-interface-button-for-application-basic-color-tal-revivo.png" />

                        </div>
                        <hr />

                    </div>
                </div>
            </div>
            <div className='fin'>
                <p className='finn'>FINISH</p>

            </div>
        </div >
    )
}
