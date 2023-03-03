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
                <p  className='createJob  '>Add a Candidate</p>

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
                <div className='oldCandidate'>
                    <div className='dropp'>
                        <p>Select From the list of candidate in your </p>
                        <select onChange={handleCandidateSelection} className='dropDown mb-10 mt-14 '>
                            <option  value="select candidate"  >Select candidate</option>

                            {newCandidate.map((candidate) => (
                                <option key={candidate.name} value={candidate.nam}>{candidate.nam} </option>
                            ))}
                        </select>

                        {/* <p>{selectedCandidate.nam}</p> */}
                    </div>
                </div>

                <div className='newCandidate'>
                    <p className='fillForm  mt-20'>Fill out details , of prospective employee</p>

                    <div className='formInput flex justify-center mt-14'>

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

                    </div>



                    <div className='resume mt-6' {...getRootProps()}>
                        <div className='upload'>
                            <img className='ml-20' src="https://img.icons8.com/external-flaticons-lineal-color-flat-icons/64/null/external-file-back-to-school-flaticons-lineal-color-flat-icons-4.png" />

                            <p>Drag and Drop resume here</p>
                        </div>
                    </div>
                    <p onClick={() => { handleUpload() }}>Uploaded</p>
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
