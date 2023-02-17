import React from 'react'

export default function det() {
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

                <div className='fill'>
                    <div className='flex justify-around '>
                        <div className='grid'>
                            <label for="title">Title:</label>
                            <input placeholder='Andriod' type="text" id="title" name="title" />
                        </div>
                        <div className='grid'>
                            <label for="title">Description:</label>
                            <input placeholder='E.g Entry level software engineer' type="text" id="title" name="title" />
                        </div>
                    </div>

                    <div className='flex justify-around mt-14'>
                        <div>
                            <p>Interview reminder</p>
                            <p>This section serves as a reminder for what interviewer should do during the interview.</p>
                            <textarea className='descrip' placeholder='Take 5 min to introduce yourself and make the candidate comfortabl' id="description" name="description"></textarea>

                        </div>
                        <div>
                            <p>Checklist</p>
                            <p>Quick reminders for you prior to the interview.</p>
                            <p>+ Add item</p>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
