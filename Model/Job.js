import { Schema, model, models } from "mongoose"

  const jobSchema = new Schema({
    Title: {
      type: String
    },
    Department: {
      type: String
    },
    Location: {
      type: String
    },
    Salary: {
      type: Number,
      required: true,
      maxlength: 60,
    },
    Deadline: {
      type: String,
      maxlength: 60,
    },
    Description:{
        type: String,
      maxlength: 60,
    }
  },
  
  )
  const Job = models.Job || model('Job', jobSchema)
  export default Job
  