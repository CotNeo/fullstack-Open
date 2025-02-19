const express = require('express')
const cors = require('cors')
const morgan = require('morgan')

const app = express()

// 📌 Middleware: CORS ve JSON Parser
app.use(cors()) // Tüm origin’lerden istek kabul ediliyor.
app.use(express.json())

// 📌 Morgan Loglama (POST isteklerinde body'yi göster)
morgan.token('post-data', (req) => req.method === 'POST' ? JSON.stringify(req.body) : '')
app.use(morgan(':method :url :status :res[content-length] - :response-time ms :post-data'))

let persons = [
    { id: "1", name: "Arto Hellas", number: "040-123456" },
    { id: "2", name: "Ada Lovelace", number: "39-44-5323523" },
    { id: "3", name: "Dan Abramov", number: "12-43-234345" },
    { id: "4", name: "Mary Poppendieck", number: "39-23-6423122" }
]
// 📌 GET / → Ana sayfa için yönlendirme
app.get('/', (req, res) => {
    res.send('<h1>Welcome to the Phonebook API!</h1><p>Try <a href="/api/persons">/api/persons</a></p>');
});


// 📌 GET /api/persons → Tüm kişileri listele
app.get('/api/persons', (req, res) => {
    res.json(persons)
})

// 📌 GET /info → Telefon rehberi bilgisi
app.get('/info', (req, res) => {
    const count = persons.length
    const time = new Date()
    res.send(`<p>Phonebook has info for ${count} people</p><p>${time}</p>`)
})

// 📌 GET /api/persons/:id → Tek bir kişiyi getir
app.get('/api/persons/:id', (req, res) => {
    const id = req.params.id
    const person = persons.find(p => p.id === id)

    if (person) {
        res.json(person)
    } else {
        res.status(404).json({ error: "Person not found" })
    }
})

// 📌 DELETE /api/persons/:id → Kişiyi sil
app.delete('/api/persons/:id', (req, res) => {
    const id = req.params.id
    persons = persons.filter(p => p.id !== id)

    res.status(204).end()
})

// 📌 POST /api/persons → Yeni kişi ekle
app.post('/api/persons', (req, res) => {
    const body = req.body

    if (!body.name || !body.number) {
        return res.status(400).json({ error: "Name or number missing" })
    }

    if (persons.find(p => p.name === body.name)) {
        return res.status(400).json({ error: "Name must be unique" })
    }

    const newPerson = {
        id: String(Math.floor(Math.random() * 100000)),
        name: body.name,
        number: body.number
    }

    persons = [...persons, newPerson]
    res.status(201).json(newPerson)
})

// 📌 Middleware: Bilinmeyen URL için 404 hatası
const unknownEndpoint = (request, response) => {
  response.status(404).json({ error: 'unknown endpoint' })
}
app.use(unknownEndpoint)

// 📌 Sunucuyu başlat (Deploy İçin Güncellendi)
const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})
