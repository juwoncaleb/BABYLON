import React, { useState } from 'react'

export default function takeHome() {
    const [toggle, setToggle] = useState(true)

    return (
        <div className='takeHome'>
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
            <p className='subb'>Fill in all details of the take home assignment.</p>
            <div className='take'>

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

                    <hr className='border mt-10' />
                    <p className='check mt-10'>Take Home Assignment</p>
                    <p>Ask candidate to complete an assignment and return the results.</p>
                    <p className='mt-8 mb-2'>Title</p>
                    <input className='titleInput' />
                    <p>Description.</p>
                    <textarea className='takeHomedes' placeholder='Welcome message and assignment instruction for candidates' id="description" name="description"></textarea>
                    <p className='mt-4'>Paste Github Code link </p>
                    <input className='titleInput mt-4' />

                    <div>
                        <p className='check mt-10'>Assessment</p>
                        <p>Score code result based on the following criteria</p>
                        <div>
                            <p>Readability {`(How easy to read)`}</p>
                            <div>

                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}
