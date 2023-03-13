import React, { useState, useCallback, useEffect } from 'react'
import Link from 'next/link'
import { useDropzone } from 'react-dropzone';
import DropboxChooser from 'react-dropbox-chooser'
import Candidate from 'Model/Candidate';
import dbConnect from 'utils/Mongo';
import { useDispatch, useSelector } from 'react-redux'
import { addCandidate } from 'redux/pipline'




export default function job({ newCandidate }) {
    // HOLD USER SELECTED FROM THE OPTION
    const [selectedCandidate, setSelectedCandidate] = useState(null); // initialize selectedCandidate state variable to null
    let selectedObject
    const handleCandidateSelection = (event) => {
        const selectedValue = event.target.value;
        selectedObject = newCandidate.find((candidate) => candidate.nam === selectedValue);
        setSelectedCandidate(selectedObject); // update selectedCandidate state variable with the selected object
    }

    // REDUX FUNCTIONALITY
    const { selectCandidate } = useSelector(state => state.entry)
    console.log(selectCandidate);
    console.log("Added to redux");

    const dispatch = useDispatch()
    console.log(selectedCandidate);
    const addup = () => {
        try {
            dispatch(addCandidate(selectedCandidate))
            console.log("Added to redux");
        } catch (error) {
            console.error(error)
        }
    }

    // STATE MANAGEMENT
    const [nam, setNam] = useState('')
    const [email, setEmail] = useState('')
    const [location, setLocation] = useState('')
    const [salary, setSalary] = useState('')
    const [phone, setPhone] = useState('')
    const [linkedin, setLinkedin] = useState('')
    const [files, setFiles] = useState('')
    const [pdf, setPdf] = useState('')
    const [github, setGithub] = useState([])
    const [currentTag, setCurrentTag] = useState('')
    const [publicId, setPublicId] = useState('');
    const [progress, setProgress] = useState(0)
    const candidateObject = {
        nam
    }
    //SEND TO MONGO DATA BASE
    const submitComment = async () => {
        // this is to find where we want to post int
        await fetch('/api/candidate', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify({
                nam,
                email,
                phone,
                location,
                linkedin,
                github,
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
    const handleUpload = (file) => {
        const storageRef = storage.ref();
        const fileRef = storageRef.child(file.name);
        fileRef.put(file).then(() => {
            fileRef.getDownloadURL().then((url) => {
                setPdf(url);
                console.log('File uploaded successfully');
            });
        });
    };

    console.log(pdf);


    console.log(pdf);
    const refreshPage = () => {
        window.location.reload();
    }
    return (

        <div className='joob'>
            <div className='newJob'>
                <p className='createJob  '>Add a Candidate</p>

                <div
                    onClick={() => {
                        setCurrent(false)
                    }}
                    className='flex justify-around choseTemplate cursor-pointer '>
                    {/* ICON */}
                    <div className='templatebarrier mr-10'>
                        <div className='templateClassification'>
                            <img src="https://img.icons8.com/cotton/64/000000/file.png" />
                            <div className='ml-8 mt-2'>
                                <p className='interviewHeader'>Blank</p>
                                <p>Start from scratch</p>
                            </div>
                        </div>
                    </div>
                    {/* TEMPLATE LIBRARY */}

                    <div
                        onClick={() => {
                            setCurrent(true)
                        }}
                        className='templatebarrier cursor-pointer '>
                        {/* ICON */}
                        <div className='templateClassification'>
                            <img src="https://img.icons8.com/external-flaticons-lineal-color-flat-icons/64/null/external-file-back-to-school-flaticons-lineal-color-flat-icons-4.png" />

                            <div className='ml-8 mt-2'>
                                <p className='interviewHeader'>Existing</p>
                                <p>Add from Database</p>
                            </div>
                        </div>
                    </div>

                </div>
                <p onClick={addup}>Test</p>
                {/* <p>{selectCandidate}</p>
                <p onClick={sendcandidate}>PUSH</p> */}

                <div className='grid '>

                    <div className='grid'>
                        <label for="title">Full Name</label>
                        <input value={nam} onChange={(e) => setNam(e.target.value)} type="text" id="title" name="title" />
                    </div>
                    <div className='grid'>
                        <label for="department">Email</label>
                        <input value={email} onChange={(e) => setEmail(e.target.value)} type="text" id="department" name="department" />
                    </div>
                    <div className='grid'>
                        <label for="location">Phone</label>
                        <input value={phone} onChange={(e) => setPhone(e.target.value)} type="text" id="salary" name="salary" />
                    </div>
                    <div className='grid'>
                        <label for="location">Location</label>
                        <input value={location} onChange={(e) => setLocation(e.target.value)} type="text" id="location" name="location" />
                    </div>

                    <div className='grid'>
                        <label for="location">Linkedin</label>
                        <input value={linkedin} onChange={(e) => setLinkedin(e.target.value)} type="text" id="salary" name="salary" />
                    </div>

                    <div className='grid'>
                        <label for="location">Github</label>
                        <input value={github} onChange={(e) => setGithub(e.target.value)} type="text" id="salary" name="salary" />
                    </div>

                </div>
                <div className='submittButton'>
                    <p onClick={() => { addup(); submitComment(); refreshPage(); }} className='cursor-pointer subb'>SUBMIT</p>
                </div>
            </div>

        </div>
    )
}


export const getServerSideProps = async () => {
    try {
        await dbConnect();
        console.log("fetching data");
        const allCandidate = await Candidate.find();
        console.log("Candidate fetched");
        return {
            props: {
                newCandidate: JSON.parse(JSON.stringify(allCandidate)),
            },
        };
    } catch (error) {
        console.log("cant fetch");
        return {
            props: {
                comfort: [],
            },
        };
    }
};