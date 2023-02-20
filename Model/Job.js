import { Schema, model, models } from "mongoose"

  const jobSchema = new Schema({
    category: {
      type: String
    },
    subCategory: {
      type: String
    },
    description: {
      type: String
    },
    name: {
      type: String,
      required: true,
      maxlength: 60,
    },
    price: {
      type: Number,
      maxlength: 60,
    },
    images: {
      type: String,
      maxlength: 200
    },
    stocks: {
      type: Number,
    },
    
    totalPrice: {
      type: Number
    }
  },
    { timestamps: true }
  
  )
  const Job = models.Job || model('Job', jobSchema)
  export default Job
  