
import dbConnect from "../../../utils/Mongo";
import Candidate from "Model/Candidate";
export default async function Handler (req, res) {
    const {method} = req
    // Connect to Database
    console.log("Connecting to the database...");
     try {
        await dbConnect()
     } catch (error) {
        console.log(error);
     }
    console.log("Database Connected");    
    
    if (method === "GET") {
        
        const allShoe = await Shoe.find()
        res.status(200).json(allShoe)
    }
    if (method === "POST") {
        try {
            console.log(req.body);
            const newCandidate = await Candidate.create(req.body);
            console.log(newCandidate);
            res.status(200).json(newCandidate);
            console.log("New candidate logged");
        } catch (error) {
            console.log(error);
            res.status(500).json(error);
        }
    }
}