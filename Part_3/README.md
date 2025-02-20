# Phonebook API 🚀

## 🌍 English

### 📌 Introduction
This is a simple RESTful API for managing a phonebook. The API allows users to retrieve, add, and delete contacts. The application is built using **Express.js** with logging provided by **Morgan** and CORS enabled for cross-origin requests.

This project is part of the **University of Helsinki's Full Stack Open course (Part 3 Exercises)**.

### 🚀 Features
- List all contacts
- Get details of a single contact
- Delete a contact
- Add a new contact
- Log HTTP requests
- Handles unknown endpoints

### 📦 Technologies Used
- **Node.js**
- **Express.js**
- **Morgan** (Logging)
- **CORS** (Cross-Origin Resource Sharing)

### 🛠️ Setup & Installation

#### 1️⃣ Clone the repository
```sh
$ git clone https://github.com/CotNeo/fullstack-Open.git
$ cd fullstack-Open
```

#### 2️⃣ Install dependencies
```sh
$ npm install
```

#### 3️⃣ Start the server
```sh
$ npm start
```
Or, run in development mode with **nodemon**:
```sh
$ npm run dev
```

### 4️⃣ API Endpoints
| Method | Endpoint           | Description                        |
|--------|-------------------|------------------------------------|
| GET    | `/api/persons`    | Get all contacts                  |
| GET    | `/api/persons/:id` | Get a single contact by ID        |
| DELETE | `/api/persons/:id` | Delete a contact by ID            |
| POST   | `/api/persons`    | Add a new contact                 |
| GET    | `/info`           | Get total contact count & time    |

### 📂 Project Structure
```
Phonebook-Backend/
│── package.json         # Project dependencies
│── package-lock.json    # Dependency lock file
│── index.js             # Main application file
│── .gitignore           # Ignoring unnecessary files
├───node_modules/        # Installed dependencies
```

### 🌐 Live Demo
- **Frontend:** [Phonebook App](https://fso-frontend-phonebook.netlify.app/) 🌍
- **Backend API:** [Phonebook Backend](https://phonebook-backend-77kw.onrender.com/api/persons) ⚡
  - *Note: The backend is deployed on a free-tier plan, so there may be some delay when the server is cold. If there are no recent requests, the server may be temporarily inactive.*

---

## 🇹🇷 Telefon Rehberi API

### 📌 Giriş
Bu proje, bir telefon rehberi yönetmek için geliştirilen basit bir **RESTful API**'dir. API, kişileri listeleme, ekleme ve silme işlemlerini yapmanıza olanak tanır. Uygulama **Express.js** kullanılarak geliştirilmiş olup, **Morgan** ile HTTP istekleri loglanmakta ve **CORS** desteği ile çapraz kaynak erişimine izin vermektedir.

Bu proje, **Helsinki Üniversitesi Full Stack Open kursunun 3. Bölüm Egzersizleri** kapsamındadır.

### 🚀 Özellikler
- Tüm kişileri listeleme
- Tek bir kişinin bilgilerini getirme
- Kişi silme
- Yeni kişi ekleme
- HTTP isteklerini loglama
- Bilinmeyen uç noktalar için hata yönetimi

### 📦 Kullanılan Teknolojiler
- **Node.js**
- **Express.js**
- **Morgan** (Loglama)
- **CORS** (Çapraz Kaynak Paylaşımı)

### 🛠️ Kurulum ve Çalıştırma

#### 1️⃣ Depoyu klonlayın
```sh
$ git clone https://github.com/CotNeo/fullstack-Open.git
$ cd fullstack-Open
```

#### 2️⃣ Bağımlılıkları yükleyin
```sh
$ npm install
```

#### 3️⃣ Sunucuyu başlatın
```sh
$ npm start
```
Ya da, geliştirme modunda çalıştırmak için:
```sh
$ npm run dev
```

### 4️⃣ API Uç Noktaları
| Metod | Uç Nokta           | Açıklama                          |
|--------|-------------------|----------------------------------|
| GET    | `/api/persons`    | Tüm kişileri getir              |
| GET    | `/api/persons/:id` | ID'ye göre tek bir kişiyi getir |
| DELETE | `/api/persons/:id` | ID'ye göre kişiyi sil           |
| POST   | `/api/persons`    | Yeni kişi ekle                  |
| GET    | `/info`           | Toplam kişi sayısını ve saati getir |

### 📂 Proje Yapısı
```
Phonebook-Backend/
│── package.json         # Proje bağımlılıkları
│── package-lock.json    # Bağımlılık kilit dosyası
│── index.js             # Ana uygulama dosyası
│── .gitignore           # Gereksiz dosyaları yok sayma
├───node_modules/        # Yüklenen bağımlılıklar
```

### 🌐 Canlı Demo
- **Frontend:** [Telefon Rehberi Uygulaması](https://fso-frontend-phonebook.netlify.app/) 🌍
- **Backend API:** [Telefon Rehberi Backend](https://phonebook-backend-77kw.onrender.com/api/persons) ⚡
  - *Not: Backend, ücretsiz plan ile dağıtıldığı için sunucu soğukken gecikme yaşanabilir. Eğer yakın zamanda istek yapılmamışsa sunucu geçici olarak kapalı olabilir.*

---

🛠 **Geri Bildirim & Katkılar**
Herhangi bir geri bildiriminiz varsa paylaşabilirsiniz! 💬

