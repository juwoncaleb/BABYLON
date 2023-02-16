import React from 'react'

export default function auth() {
    return (
        <div className='head_auth'>
            <div className='auth '>
                <img className='lock' src='lock.png' />
                <p className='babylon mb-4'>WELCOME TO BABYLoN </p>
                <div className='grid grid-cols-1'>
                    <input className='inputDet ' />
                    <input className='inputDet ' />
                </div>
                <button className='flex justify-around signIn'>
                    Sign In
                </button>
                <p className='forgot'>Forgot details ?  </p>
                {/* GOOGLE */}
                <div className=''>
                    <button className=' flex justify-around google'>
                        <img className='login_Icon' src="https://img.icons8.com/fluency/48/null/google-logo.png" />
                        Connect with google
                    </button>
                    {/* GITHUB */}
                    <button className='flex justify-around github'>
                        <img className='login_Icon' src="https://img.icons8.com/nolan/64/github.png" />     Connect with github
                    </button>
                    {/* TWITTER */}

                </div>
            </div>
        </div>
    )
}
