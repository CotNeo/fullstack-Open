const mongoose = require('mongoose')
const Person = require('./models/person')  // Mongoose modeli

// Komut satırından girilen argümanları al
const args = process.argv

if (args.length < 3) {
  console.log('Lütfen MongoDB şifresini argüman olarak girin.')
  process.exit(1)
}

const password = args[2]
const name = args[3]
const number = args[4]

// MongoDB bağlantı URI'sini ayarla
const url = `mongodb+srv://fullstack:${password}@cluster0.mongodb.net/phonebookApp?retryWrites=true&w=majority`

mongoose.set('strictQuery', false)
mongoose.connect(url)

// 📌 Eğer sadece şifre girildiyse, rehberdeki tüm kişileri listele
if (!name || !number) {
  Person.find({}).then(result => {
    console.log('📞 Telefon Rehberi:')
    result.forEach(person => {
      console.log(`${person.name} ${person.number}`)
    })
    mongoose.connection.close()
  })
} else {
  // 📌 Yeni kişi ekleme
  const person = new Person({
    name: name,
    number: number
  })

  person.save().then(() => {
    console.log(`✅ Eklendi: ${name} numarası: ${number}`)
    mongoose.connection.close()
  })
}
