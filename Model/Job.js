import { Schema, model, models } from "mongoose"

  const jobSchema = new Schema({
    title: {
      type: String,
      required: true
    },
    department: {
      type: String,
      required: true
    },
    location: {
      type: String,
      required: true
    },
    salary: {
      type: Number,
      maxlength: 60 ,
      required: true
    },
    deadline: {
      type: String,
      maxlength: 60,
      required: true
    },
    tags:{
      type :Array,
      required: true
    },
    description:{
        type: String,
      maxlength: 60,
    
      required: true
    }
  },
  
  )
  const Job = models.Job || model('Job', jobSchema)
  export default Job
  