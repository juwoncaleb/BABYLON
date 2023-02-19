import React, { useState } from 'react'

export default function prev2() {
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


            <div className='prev2'>
                <p className='check mt-10'>Coding Challenge</p>

                <div>
                    <p className='check mt-6 '>Challenge</p>
                    <div className='flex justify-between mt-8 assess'>
                        <p className='mt-2 ml-2'>Reverse a linked list </p>
                        <div className='flex mt-1 mr-2'>
                            <img className=' mb-2' src="https://img.icons8.com/fluency/48/null/github.png" />

                        </div>
                    </div>
                </div>
                <div>

                </div>
                <p className='check mt-10'>Assessment</p>
                <p>Score code result based on the following criteria</p>
                <div className='flex justify-between mt-8 assess'>
                    <p className='mt-2 ml-2'>Readability  {`(How easy to read)`}</p>
                    <div className='flex mt-2 mr-2'>
                        <img className='star' src="https://img.icons8.com/fluency/48/null/star.png" />
                        <img className='star' src="https://img.icons8.com/fluency/48/null/star.png" />
                        <img className='star' src="https://img.icons8.com/fluency/48/null/star.png" />
                    </div>
                </div>
                <div className='mt-4 '>
                </div>
            </div>
            <div className='fin'>
                <p className='finn'>FINISH</p>

            </div>
        </div >
    )
}
