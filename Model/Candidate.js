import { Schema, model, models } from "mongoose"

  const candidateSchema = new Schema({
    nam: {
      type: String,
     
    },
    email: {
      type: String,
     
    },
    phone: {
      type: Number,
     
    },
    location: {
      type: String,
     
    },
    linkedin: {
      type: String,
      maxlength: 60,
     
    },
    github:{
      type :Array,
     
    },
    pdf:{
      type: String,
    }
  },
  
  )
  const Candidate = models.Candidate || model('Candidate', candidateSchema)
  export default Candidate
  