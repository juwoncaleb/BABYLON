import { Schema, model, models } from "mongoose"

  const candidateSchema = new Schema({
    nam: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    },
    phone: {
      type: String,
      required: true
    },
    location: {
      type: Number,
      maxlength: 60 ,
      required: true
    },
    linkedin: {
      type: String,
      maxlength: 60,
      required: true
    },
    github:{
      type :Array,
      required: true
    },
    pdf:{
      type: String,
    }
  },
  
  )
  const Candidate = models.Candidate || model('Candidate', candidateSchema)
  export default Candidate
  