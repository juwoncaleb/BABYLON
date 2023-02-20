import dbConnect from "../../../utils/Mongo";
import Job from "../../../Model/job";

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
            const newJob = await Job.create(req.body);
            res.status(200).json(newJob);
            console.log("New RETRO created");
        } catch (error) {
            res.status(500).json(error);
        }
    }
}