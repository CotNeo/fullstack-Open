require('dotenv').config()
const mongoose = require('mongoose')
const Person = require('./models/person') // ✅ Mongoose modeli

// 📌 Komut satırından girilen argümanları al
const args = process.argv

if (args.length < 3) {
  console.log('⚠️ Lütfen MongoDB şifresini argüman olarak girin!')
  console.log('Örnek Kullanım: node mongo.js <password> [name] [number]')
  process.exit(1)
}

const password = args[2]
const name = args[3]
const number = args[4]

// 📌 MongoDB bağlantı URI'sini .env üzerinden veya doğrudan ayarla
const MONGO_URI = process.env.MONGO_URI || `mongodb+srv://fullstack:${password}@cluster0.mongodb.net/phonebookApp?retryWrites=true&w=majority`

mongoose.set('strictQuery', false)

const connectToDatabase = async () => {
  try {
    await mongoose.connect(MONGO_URI)
    console.log('✅ MongoDB bağlantısı başarılı!')
  } catch (error) {
    console.error('❌ MongoDB bağlantı hatası:', error.message)
    process.exit(1)
  }
}

const listPersons = async () => {
  try {
    const persons = await Person.find({})
    console.log('📞 Telefon Rehberi:')
    persons.forEach(person => {
      console.log(`${person.name} - ${person.number}`)
    })
  } catch (error) {
    console.error('❌ Veritabanından kişiler alınamadı:', error.message)
  } finally {
    mongoose.connection.close()
  }
}

const addPerson = async () => {
  try {
    const person = new Person({ name, number })
    await person.save()
    console.log(`✅ Eklendi: ${name} numarası: ${number}`)
  } catch (error) {
    console.error('❌ Kişi eklenirken hata oluştu:', error.message)
  } finally {
    mongoose.connection.close()
  }
}

// 📌 Uygulama akışı
const main = async () => {
  await connectToDatabase()

  if (!name || !number) {
    await listPersons()
  } else {
    await addPerson()
  }
}

main()
