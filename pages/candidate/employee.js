import React, { useState, useCallback, useEffect } from 'react'
import Link from 'next/link'
import { useDropzone } from 'react-dropzone';

export default function job() {
    // STATE MANAGEMENT
    const [title, setTitle] = useState('')
    const [department, setDepartment] = useState('')
    const [location, setLocation] = useState('')
    const [salary, setSalary] = useState('')
    const [deadline, setDeadline] = useState('')
    const [description, setDescription] = useState('')
    const [files, setFiles] = useState('')
    const [pdf, setPdf] = useState('')
    useEffect(() => {
        console.log(files);
        console.log();
    }, [files])
    // this array state contains the created statge
    const [tags, setTags] = useState([])
    // this holds the current stage till it is pusged above
    const [currentTag, setCurrentTag] = useState('')
    // SEND JOB TO MONGODB THROUGH API
    //SEND TO MONGO DATA BASE
    const submitComment = async () => {
        // this is to find where we want to post int
        await fetch('/api/job', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify({
                title,
                department,
                location,
                salary,
                deadline,
                description,
                tags,
                pdf
            }),
        })


    }

    // DRAG AND DROP FEATURE
    const onDrop = useCallback((acceptedFiles, rejectedFiles) => {
        acceptedFiles.forEach((file) => {
            const reader = new FileReader()
            reader.onload = () => {
                setFiles(prevState => [...prevState, reader.result])
            }
            reader.readAsDataURL(file)
        })
    }, [])
    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop })

    // FUNCTION THAT SENDS ITEM TO CLOUDINARY
    const uploadImages = async () => {
        const data = new FormData()
        data.append('file', files)
        data.append("upload_preset", "uploads")
        const upload = await axios.post("https://api.cloudinary.com/v1_1/ddjlsw268/image/upload", data)
        const { url } = upload.data
        let newUrl = url
        setPdf(newUrl)

    }


    console.log(tags);

    const refreshPage = () => {
        window.location.reload();
    }
    return (

        <div className='joob'>
            <div className='newJob'>
                <p className='createJob  '>Add a Candidate</p>



                <p className='fillForm  mt-20'>Fill out details , of prospective employee</p>



                <div className='formInput flex justify-center mt-14'>

                    <div className='grid '>

                        <div className='grid'>
                            <label for="title">Full Name</label>
                            <input value={title} onChange={(e) => setTitle(e.target.value)} type="text" id="title" name="title" />
                        </div>
                        <div className='grid'>
                            <label for="department">Email</label>
                            <input value={department} onChange={(e) => setDepartment(e.target.value)} type="text" id="department" name="department" />
                        </div>
                        <div className='grid'>
                            <label for="location">Phone Number</label>
                            <input value={location} onChange={(e) => setLocation(e.target.value)} type="text" id="location" name="location" />
                        </div>
                        <div className='grid'>
                            <label for="location">Location</label>
                            <input value={salary} onChange={(e) => setSalary(e.target.value)} type="text" id="salary" name="salary" />
                        </div>
                        <div className='grid'>
                            <label for="location">Linkedin</label>
                            <input value={salary} onChange={(e) => setSalary(e.target.value)} type="text" id="salary" name="salary" />
                        </div>

                        <div className='grid'>
                            <label for="location">Github</label>
                            <input value={salary} onChange={(e) => setSalary(e.target.value)} type="text" id="salary" name="salary" />
                        </div>

                    </div>

                </div>

                <div className='resume mt-6' {...getRootProps()}>
                    <div className='upload'>
                        <img className='ml-20' src="https://img.icons8.com/external-flaticons-lineal-color-flat-icons/64/null/external-file-back-to-school-flaticons-lineal-color-flat-icons-4.png" />

                        <p>Drag and Drop resume here</p>
                    </div>
                </div>
                <p onClick={()=>{uploadImages()}}>Uploaded</p>
                <div className='submittButton'>
                    <p onClick={() => { submitComment(); refreshPage();  }} className='cursor-pointer subb'>SUBMIT</p>
                </div>

            </div>

        </div>
    )
}

