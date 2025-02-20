require('dotenv').config()
const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const mongoose = require('mongoose')
const Person = require('./models/person') // Mongoose modeli

const app = express()

// 📌 Middleware: CORS, JSON Parser
app.use(cors()) 
app.use(express.json())

// 📌 Morgan Loglama (POST isteklerinde body'yi göster)
morgan.token('post-data', (req) => req.method === 'POST' ? JSON.stringify(req.body) : '')
app.use(morgan(':method :url :status :res[content-length] - :response-time ms :post-data'))

// 📌 MongoDB Bağlantısı
const MONGO_URI = process.env.MONGO_URI
mongoose.set('strictQuery', false)
mongoose.connect(MONGO_URI)
  .then(() => console.log('✅ MongoDB bağlantısı başarılı!'))
  .catch(err => console.error('❌ MongoDB bağlantı hatası:', err.message))

// 📌 GET / → Ana sayfa için yönlendirme
app.get('/', (req, res) => {
    res.send('<h1>Welcome to the Phonebook API!</h1><p>Try <a href="/api/persons">/api/persons</a></p>')
})

// 📌 GET /api/persons → Tüm kişileri listele
app.get('/api/persons', async (req, res) => {
    try {
        const persons = await Person.find({})
        res.json(persons)
    } catch (error) {
        res.status(500).json({ error: 'Veritabanından kişiler alınamadı' })
    }
})

// 📌 GET /info → Telefon rehberi bilgisi
app.get('/info', async (req, res) => {
    try {
        const count = await Person.countDocuments({})
        res.send(`<p>Phonebook has info for ${count} people</p><p>${new Date()}</p>`)
    } catch (error) {
        res.status(500).json({ error: 'Veritabanından kişi sayısı alınamadı' })
    }
})

// 📌 GET /api/persons/:id → Tek bir kişiyi getir
app.get('/api/persons/:id', async (req, res) => {
    try {
        const person = await Person.findById(req.params.id)
        if (person) {
            res.json(person)
        } else {
            res.status(404).json({ error: "Person not found" })
        }
    } catch (error) {
        res.status(400).json({ error: "Invalid ID format" })
    }
})

// 📌 DELETE /api/persons/:id → Kişiyi sil
app.delete('/api/persons/:id', async (req, res) => {
    try {
        await Person.findByIdAndDelete(req.params.id)
        res.status(204).end()
    } catch (error) {
        res.status(400).json({ error: "Invalid ID format" })
    }
})

// 📌 POST /api/persons → Yeni kişi ekle
app.post('/api/persons', async (req, res) => {
    const body = req.body

    if (!body.name || !body.number) {
        return res.status(400).json({ error: "Name or number missing" })
    }

    const existingPerson = await Person.findOne({ name: body.name })
    if (existingPerson) {
        return res.status(400).json({ error: "Name must be unique" })
    }

    const newPerson = new Person({
        name: body.name,
        number: body.number
    })

    try {
        const savedPerson = await newPerson.save()
        res.status(201).json(savedPerson)
    } catch (error) {
        res.status(500).json({ error: "Failed to save the person" })
    }
})

// 📌 POST /api/persons/bulk → Toplu kişi ekleme (Bulk Insert)
app.post('/api/persons/bulk', async (req, res) => {
    const body = req.body

    if (!Array.isArray(body) || body.length === 0) {
        return res.status(400).json({ error: "Gönderilen veri bir dizi (array) olmalıdır." })
    }

    try {
        const savedPersons = await Person.insertMany(body)
        res.status(201).json(savedPersons)
    } catch (error) {
        res.status(500).json({ error: "Veri eklenirken hata oluştu." })
    }
})

// 📌 PUT /api/persons/:id → Mevcut kişinin bilgilerini güncelle
app.put('/api/persons/:id', async (req, res) => {
    const body = req.body

    if (!body.name || !body.number) {
        return res.status(400).json({ error: "Name or number missing" })
    }

    try {
        const updatedPerson = await Person.findByIdAndUpdate(
            req.params.id,
            { name: body.name, number: body.number },
            { new: true, runValidators: true }
        )
        
        if (updatedPerson) {
            res.json(updatedPerson)
        } else {
            res.status(404).json({ error: "Person not found" })
        }
    } catch (error) {
        res.status(400).json({ error: "Invalid ID format" })
    }
})

// 📌 Middleware: Bilinmeyen URL için 404 hatası
app.use((req, res) => {
    res.status(404).json({ error: 'unknown endpoint' })
})

// 📌 Sunucuyu başlat
const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
    console.log(`✅ Server running on port ${PORT}`)
})
