import React, { useState, useCallback, useEffect } from 'react'
import Link from 'next/link'
import { useDropzone } from 'react-dropzone';
import DropboxChooser from 'react-dropbox-chooser'
import Candidate from 'Model/Candidate';
import dbConnect from 'utils/Mongo';
const config = {
    bucketName: 'babylon',
    dirName: 'pdf', /* optional */
    region: 'eu-west-1',
    accessKeyId: 'ANEIFNENI4324N2NIEXAMPLE',
    secretAccessKey: 'cms21uMxçduyUxYjeg20+DEkgDxe6veFosBT7eUgEXAMPLE',
}


export default function job({ newCandidate }) {
    console.log(newCandidate);
    // Holds the user selected in the state

    const [selectedCandidate, setSelectedCandidate] = useState(null); // initialize selectedCandidate state variable to null
    console.log(selectedCandidate);
    const handleCandidateSelection = (event) => {
        const selectedValue = event.target.value;
        console.log(selectedValue);
        const selectedObject = newCandidate.find((candidate) => candidate.nam === selectedValue);
        setSelectedCandidate(selectedObject); // update selectedCandidate state variable with the selected object
    }

    // STATE MANAGEMENT
    const [current, setCurrent] = useState(false)
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
    console.log(files);

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
    console.log(newCandidate);
    return (

        <div className='joob'>
            <div className='newJob'>
                <p className='text-5xl  mt-6 schedule'>Schedule Interview</p>


                <p className='fillForm text-3xl   mt-20'>Fill out details , of prospective employee</p>



                <div className='newCandidate'>


                    <div className='formInput flex justify-center mt-14'>
                        <p className='text-1xl schedule'>Select From the list of candidate in your </p>

                        <select onChange={handleCandidateSelection} className='dropDown mb-10 mt-2 '>
                            <option value="select candidate"  >Select candidate</option>

                            {newCandidate.map((candidate) => (
                                <option className='' key={candidate.name} value={candidate.nam}>{candidate.nam} </option>
                            ))}
                        </select>
                        <div className='grid '>

                            <div className='grid'>
                                <label for="title">JOB</label>
                                <input className='fullBar' value={nam} onChange={(e) => setNam(e.target.value)} type="text" id="title" name="title" />
                            </div>
                            <div className='grid'>
                                <label for="department">Interview Template</label>
                                <input value={email} onChange={(e) => setEmail(e.target.value)} type="text" id="department" name="department" />
                            </div>
                            <div className='grid'>
                                <label for="location">Interviewier</label>
                                <input value={phone} onChange={(e) => setPhone(e.target.value)} type="text" id="salary" name="salary" />
                            </div>
                            <div className='grid'>
                                <label for="location">Date</label>
                                <input value={phone} onChange={(e) => setPhone(e.target.value)} type="date" id="deadline" name="deadline" />
                            </div>
                            <div className='flex justify-between mt-2 mb-2'><p>Start</p> <p>End</p></div>

                            <div className='flex justify-between mt-1'>

                                <div className='mr-4'>

                                    <select name="hour" id="hour">
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                        <option value="6">6</option>
                                        <option value="7">7</option>
                                        <option value="8">8</option>
                                        <option value="9">9</option>
                                        <option value="10">10</option>
                                        <option value="11">11</option>
                                        <option value="12">12</option>
                                    </select>

                                    <select className='ml-2' name="minute ml-2" id="minute">
                                        <option value="00">00</option>
                                        <option value="15">15</option>
                                        <option value="30">30</option>
                                        <option value="45">45</option>
                                    </select>

                                </div>
                                <div>

                                    <select name="hour" id="hour">
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                        <option value="6">6</option>
                                        <option value="7">7</option>
                                        <option value="8">8</option>
                                        <option value="9">9</option>
                                        <option value="10">10</option>
                                        <option value="11">11</option>
                                        <option value="12">12</option>
                                    </select>

                                    <select name="minute" id="minute">
                                        <option value="00">00</option>
                                        <option value="15">15</option>
                                        <option value="30">30</option>
                                        <option value="45">45</option>
                                    </select>
                                </div>
                            </div>

                        </div>

                    </div>

                    
                    <div className='submittButton'>
                        <p onClick={() => { submitComment(); refreshPage(); }} className='cursor-pointer subb'>SUBMIT</p>
                    </div>

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

