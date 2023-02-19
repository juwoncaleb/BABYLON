import React, { useState } from 'react'

export default function det() {
    const [toggle, setToggle] = useState(true)
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
                    <div className='mt-10'>
                        <p className='check'>Questions</p>
                        <p>Grouping questions helps to evaluate skills in a particular competence area and make a more granular assessment.</p>
                        <div className='flex justify-between mt-14'>
                            <div className='flex'>
                                <p>Problem solving </p>
                                <p className='ml-6'>5 Questions</p>
                            </div>
                            <div className='flex'>
                                <img className='arrow' src="https://img.icons8.com/color/48/000000/chevron-left.png" />
                                <img className='dots' src="https://img.icons8.com/external-tal-revivo-color-tal-revivo/24/null/external-ellipsis-horizontal-menu-interface-button-for-application-basic-color-tal-revivo.png" />                        </div>
                        </div>
                    </div>
                    {toggle ? (<div>
                        <img className='quest' src='/quest.png' />
                        <p className='addquestion'>No Question added yet</p>
                    </div>) : (<div><p className='addquestion'>You added questions</p></div>)}
                    <div className='groupcolor'>
                        <p className='addgroup'>
                            Add new Group
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
