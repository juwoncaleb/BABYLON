import React, { useState } from 'react'

export default function det() {
    const [toggle, setToggle] = useState(true)
    const [viscibility, setViscibility] = useState(true)
    return (
        <div className='details'>
            <div className='detailss'>
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
                <p className='interviewTypeHeader'>Details</p>
                <p className='subb'>Fill in all details of the interview.</p>

                <div className='fill '>
                    <div className='flex justify-between '>
                        <div className='grid '>
                            <label for="title">Title:</label>
                            <input placeholder='Andriod' type="text" id="title" name="title" />
                        </div>
                        <div className='grid  '>
                            <label for="title">Description:</label>
                            <input placeholder='E.g Entry level software engineer' type="text" id="title" name="title" />
                        </div>
                    </div>
                    <div className='flex justify-between mt-14 gap-14'>
                        <div>
                            <p className='check'>Interview reminder</p>
                            <p>This section serves as a reminder for what interviewer should do during the interview.</p>
                            <textarea className='descrip' placeholder='Take 5 min to introduce yourself and make the candidate comfortabl' id="description" name="description"></textarea>

                        </div>
                        <div>
                            <p className='check '>Checklist</p>
                            <p>Quick reminders for you prior to the interview.</p>
                            <div className='flex justify-center checkBox'>
                                <input type="checkbox" />
                                <p className='ml-6'>New checklist Item</p>
                            </div>
                            <p className='add'>+ Add item</p>

                        </div>


                    </div>
                    <hr className='border mt-10' />
                    <div>
                        <p className='check mt-6 '>Challenge</p>
                        <div className='flex justify-between mt-8 assess'>
                            <p className='mt-2 ml-2'>Reverse a linked list </p>
                            <div className='flex mt-1 mr-2'>
                                <img className=' mb-2' src="https://img.icons8.com/fluency/48/null/github.png" />

                            </div>
                        </div>
                    </div>


                    <div className='groupcolor'>
                        <p className='addgroup'>
                            Add new Challenge
                        </p>
                    </div>

                    <hr className='border mt-10' />
                    <div>
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
                        <p className='as'>+ Add new Assesment</p>
                    </div>

                </div>
            </div>
        </div>
    )
}
