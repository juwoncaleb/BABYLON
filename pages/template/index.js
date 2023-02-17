import DashboardHeader from 'components/DashboardHeader'
import React from 'react'
import Link from 'next/link'

export default function index() {
    return (
        <div className='candidatelemet'>
            <div className=''>
                <DashboardHeader />
                {/* CREATION OF TEMPLATE */}
                <div className='temp'>
                    <div className='flex justify-around choseTemplate '>
                        {/* ICON */}
                        <Link href='./template/blank'>
                            <div className='templatebarrier'>
                                <div className='templateClassification'>
                                    <img src="https://img.icons8.com/cotton/64/000000/file.png" />
                                    <div className='ml-8 mt-2'>
                                        <p className='interviewHeader'>Blank</p>
                                        <p>Start from scratch</p>
                                    </div>
                                </div>
                            </div></Link>
                        {/* TEMPLATE LIBRARY */}
                        <Link href="./template/temp">
                            <div className='templatebarrier'>
                                {/* ICON */}
                                <div className='templateClassification'>
                                    <img src="https://img.icons8.com/external-flaticons-lineal-color-flat-icons/64/null/external-file-back-to-school-flaticons-lineal-color-flat-icons-4.png" />

                                    <div className='ml-8 mt-2'>
                                        <p className='interviewHeader'>Template</p>
                                        <p>Customize templates</p>
                                    </div>
                                </div>
                            </div>
                        </Link>

                    </div>
                    {/* MY TEMPLATE */}
                    <div className=''>
                        <div className='flex justify-around list'>
                            <div className='code'>
                                <img className='Large_icon' src='screen.png' />
                                <p className='mt-6'>Cultural Fit</p>
                                <p>Loremdflmk,mv;eold,f'v</p>
                                <p className='mb-6'>pbeolgmdofx;bmljetiojdfskvm</p>
                            </div>
                            <div className='code'>
                                <img className='icon' src="code.png" />
                                <p className='mt-6'>Cultural Fit</p>
                                <p>Loremdflmk,mv;eold,f'v</p>
                                <p className='mb-6'>pbeolgmdofx;bmljetiojdfskvm</p>
                            </div>
                            <div className='code'>
                                <img className='Large_icon' src='beh.png' />
                                <p className='mt-6'>Cultural Fit</p>
                                <p>Loremdflmk,mv;eold,f'v</p>
                                <p className='mb-6'>pbeolgmdofx;bmljetiojdfskvm</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
