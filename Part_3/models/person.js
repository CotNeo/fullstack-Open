const mongoose = require('mongoose')

// Şema Tanımlama
const personSchema = new mongoose.Schema({
  name: { type: String, required: true },
  number: { type: String, required: true }
})

// Model Tanımlama
const Person = mongoose.model('Person', personSchema)

// Modeli Dışa Aktarma
module.exports = Person
