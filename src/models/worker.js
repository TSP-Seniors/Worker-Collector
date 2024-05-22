import { Schema, model } from 'mongoose'

const WorkerSchema = new Schema({
  partner_name: {
    type: String,
    require: true
  },
  sfdc_id: {
    type: String,
    require: true
  },
  contact_name: {
    type: String,
    require: true
  },
  certification_name: {
    type: String,
    require: true
  },
  certification_date: {
    type: Date,
    require: true
  },
  expiration_date: {
    type: Date,
    require: true
  },
  id: {
    type: String,
    require: true
  }
})

export default model('Networks', WorkerSchema)
