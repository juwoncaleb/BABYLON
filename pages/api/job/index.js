import dbConnect from "../../../utils/Mongo";
import Job from "Model/Candidate";
import Candidate from "Model/Candidate";
export default async function Handler (req, res) {
    const {method} = req
    // Connect to Database
    console.log("Connecting to the database...");
     await dbConnect()
    console.log("Database Connected");    
    
    if (method === "GET") {
        
        const allShoe = await Shoe.find()
        res.status(200).json(allShoe)
    }
    if (method === "POST") {
        try {
            console.log(req.body);
            const newCandidate = await Candidate.create(req.body);
            console.log(newJob);
            res.status(200).json(newCandidate);
            console.log("New candidate logged");
        } catch (error) {
            console.log(error);
            res.status(500).json(error);
        }
    }
}