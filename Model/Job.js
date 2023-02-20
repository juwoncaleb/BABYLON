import { Schema, model, models } from "mongoose"

  const jobSchema = new Schema({
    title: {
      type: String
    },
    department: {
      type: String
    },
    location: {
      type: String
    },
    salary: {
      type: Number,
      maxlength: 60,
    },
    deadline: {
      type: String,
      maxlength: 60,
    },
    description:{
        type: String,
      maxlength: 60,
    }
  },
  
  )
  const Job = models.Job || model('Job', jobSchema)
  export default Job
  