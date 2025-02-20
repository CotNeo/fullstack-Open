require('dotenv').config()
const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const mongoose = require('mongoose')
const Person = require('./models/person') // ✅ Mongoose modeli

const app = express()

// 📌 Middleware: CORS, JSON Parser
app.use(cors())
app.use(express.json())

// 📌 Morgan Loglama (POST ve PUT isteklerinde body'yi göster)
morgan.token('post-data', (req) => req.method === 'POST' || req.method === 'PUT' ? JSON.stringify(req.body) : '')
app.use(morgan(':method :url :status :res[content-length] - :response-time ms :post-data'))

// 📌 MongoDB Bağlantısı
const MONGO_URI = process.env.MONGO_URI
mongoose.set('strictQuery', false)

mongoose.connect(MONGO_URI)
  .then(() => console.log('✅ MongoDB bağlantısı başarılı!'))
  .catch(err => console.error('❌ MongoDB bağlantı hatası:', err.message))

// 📌 Ana Sayfa
app.get('/', (req, res) => {
  res.send('<h1>Welcome to the Phonebook API!</h1><p>Try <a href="/api/persons">/api/persons</a></p>')
})

// 📌 GET /api/persons → Tüm kişileri getir
app.get('/api/persons', async (req, res, next) => {
  try {
    const persons = await Person.find({})
    res.json(persons)
  } catch (error) {
    next(error)
  }
})

// 📌 GET /info → Telefon rehberi bilgisi
app.get('/info', async (req, res, next) => {
  try {
    const count = await Person.countDocuments({})
    res.send(`<p>Phonebook has info for ${count} people</p><p>${new Date()}</p>`)
  } catch (error) {
    next(error)
  }
})

// 📌 GET /api/persons/:id → Tek bir kişiyi getir
app.get('/api/persons/:id', async (req, res, next) => {
  try {
    const person = await Person.findById(req.params.id)
    if (person) {
      res.json(person)
    } else {
      res.status(404).json({ error: 'Person not found' })
    }
  } catch (error) {
    next(error)
  }
})

// 📌 DELETE /api/persons/:id → Kişiyi sil
app.delete('/api/persons/:id', async (req, res, next) => {
  try {
    const result = await Person.findByIdAndDelete(req.params.id)
    if (!result) {
      return res.status(404).json({ error: 'Person not found' })
    }
    res.status(204).end()
  } catch (error) {
    next(error)
  }
})

// 📌 POST /api/persons → Yeni kişi ekle veya var olanın numarasını güncelle
app.post('/api/persons', async (req, res, next) => {
  const { name, number } = req.body

  if (!name || !number) {
    return res.status(400).json({ error: 'Name or number missing' })
  }

  try {
    const existingPerson = await Person.findOne({ name })

    if (existingPerson) {
      // ✅ Eğer kişi zaten varsa, numarasını güncelle
      const updatedPerson = await Person.findByIdAndUpdate(
        existingPerson.id,
        { number },
        { new: true, runValidators: true, context: 'query' }
      )
      return res.json(updatedPerson)
    }

    // ✅ Eğer kişi yeni bir girişse, kaydet
    const newPerson = new Person({ name, number })
    const savedPerson = await newPerson.save()
    res.status(201).json(savedPerson)
  } catch (error) {
    next(error)
  }
})

// 📌 PUT /api/persons/:id → Mevcut kişinin bilgilerini güncelle
app.put('/api/persons/:id', async (req, res, next) => {
  const { name, number } = req.body

  if (!name || !number) {
    return res.status(400).json({ error: 'Name or number missing' })
  }

  try {
    const updatedPerson = await Person.findByIdAndUpdate(
      req.params.id,
      { name, number },
      { new: true, runValidators: true, context: 'query' }
    )

    if (!updatedPerson) {
      return res.status(404).json({ error: 'Person not found' })
    }

    res.json(updatedPerson)
  } catch (error) {
    next(error)
  }
})

// 📌 Genel hata yönetimi middleware'i
const errorHandler = (error, req, res, next) => {
  console.error('❌ Error:', error.message)

  if (error.name === 'CastError') {
    return res.status(400).json({ error: 'Malformatted ID' })
  }

  if (error.name === 'ValidationError') {
    return res.status(400).json({ error: error.message })
  }

  next(error)
}
app.use(errorHandler)

// 📌 Middleware: Bilinmeyen URL için 404 hatası
app.use((req, res) => {
  res.status(404).json({ error: 'Unknown endpoint' })
})

// 📌 Sunucuyu başlat
const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`)
})
