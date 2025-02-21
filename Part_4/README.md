# Full Stack Open - Part 4 🚀  
## Blog List API 🚀  

### 🌍 English  

#### 📌 Introduction  
This project is a RESTful API for managing blog posts and users. It provides endpoints for creating, retrieving, updating, and deleting blog posts while also handling user authentication and login with JSON Web Token (JWT). The backend is built with **Node.js** and **Express.js**, using MongoDB as the database and Mongoose for object modeling.

This project is part of the **University of Helsinki's Full Stack Open course (Part 4 Exercises).**  

---

## 🚀 Features  
- CRUD operations for blog posts
- User authentication with JWT
- User registration and login
- Password hashing with bcrypt
- Token-based authentication
- Mongoose data validation
- Middleware for logging, error handling, and authentication
- Unit and integration testing using Jest and Supertest

---

## 📺 Validation and Data Integrity  
This API includes **Mongoose validation** to ensure data integrity:  
- Blog title and URL are required.  
- Users must have a unique username.  
- Passwords are hashed before being stored.

---

## 📺 Code Quality with ESLint  
This project follows code quality standards enforced by **ESLint** to maintain clean and consistent code.  

Check for linting issues:  
```sh
npm run lint
```  
Fix linting errors automatically:  
```sh
npx eslint . --fix
```  

---

## 📺 Testing  
The project includes **unit and integration tests** using Jest and Supertest to ensure functionality and prevent regressions.  

- **Unit tests** are written to check individual functions, such as utility methods.
- **Integration tests** ensure that different parts of the API work together correctly, such as testing endpoints.
- **Test Coverage** can be generated using Jest to analyze which parts of the code are tested.  

### Running Tests
Run all tests:
```sh
npm test
```

Run tests in watch mode:
```sh
npm test -- --watch
```

Generate test coverage report:
```sh
npm test -- --coverage
```

Example test case for the **blog API**:
```javascript
test('a valid blog can be added', async () => {
  const newBlog = {
    title: 'Test Blog',
    author: 'Test Author',
    url: 'http://testblog.com',
    likes: 5
  };

  await api
    .post('/api/blogs')
    .send(newBlog)
    .expect(201)
    .expect('Content-Type', /application\/json/);

  const blogsAtEnd = await helper.blogsInDb();
  expect(blogsAtEnd).toHaveLength(helper.initialBlogs.length + 1);
});
```

---

## 🛠️ Setup & Installation  

### 1️⃣ Clone the repository  
```sh
git clone https://github.com/CotNeo/fullstack-open.git
cd fullstack-open
```  

### 2️⃣ Install dependencies  
```sh
npm install
```  

### 3️⃣ Configure MongoDB (Database Setup)  

Create a `.env` file in the root directory and add your database credentials:
```sh
MONGO_URI=mongodb+srv://your-username:your-password@cluster0.mongodb.net/blogApp?retryWrites=true&w=majority
SECRET_KEY=your_secret_key
```  

Make sure `.env` is added to `.gitignore` to keep credentials safe.  

### 4️⃣ Start the server  
Run in development mode with **nodemon**:  
```sh
npm run dev
```  
Run in production mode:  
```sh
npm start
```  

---

## 📚 API Endpoints  

| Method | Endpoint         | Description                 |
|--------|-----------------|-----------------------------|
| GET    | `/api/blogs`     | Get all blogs              |
| GET    | `/api/blogs/:id` | Get a single blog by ID    |
| POST   | `/api/blogs`     | Add a new blog post        |
| PUT    | `/api/blogs/:id` | Update a blog post        |
| DELETE | `/api/blogs/:id` | Delete a blog post        |
| POST   | `/api/users`     | Register a new user        |
| POST   | `/api/login`     | Authenticate user & get token |

---

## 📂 Project Structure  

```
blog-list-api/
│── package.json         # Project dependencies  
│── package-lock.json    # Dependency lock file  
│── index.js             # Main application file  
│── .gitignore           # Ignoring unnecessary files  
│── .env                 # Environment variables (not pushed to GitHub)  
├───controllers/         # Request handlers  
│   ├── blogs.js         # Blog-related controllers  
│   ├── users.js         # User-related controllers  
│   ├── login.js         # Authentication  
├───models/  
│   ├── blog.js          # Blog schema  
│   ├── user.js          # User schema  
├───utils/  
│   ├── config.js        # Configuration settings  
│   ├── logger.js        # Logging utility  
│   ├── middleware.js    # Middleware functions  
├───test/                # Unit & Integration tests  
│   ├── blog_api.test.js  
│   ├── user_api.test.js  
│   ├── login_api.test.js  
```

---

💡 **Contributions and feedback are welcome! Feel free to submit a pull request. 🚀**

# Full Stack Open - Bölüm 4 🚀  
## Blog List API 🚀  

### 🌍 Türkçe  

#### 📌 Giriş  
Bu proje, blog gönderilerini ve kullanıcıları yönetmek için bir RESTful API'dir. Blog gönderileri oluşturma, alma, güncelleme ve silme işlemlerini sağlayan uç noktalar sunarken, aynı zamanda JSON Web Token (JWT) ile kullanıcı kimlik doğrulaması ve oturum açma işlemlerini de yönetir. Backend, **Node.js** ve **Express.js** kullanılarak oluşturulmuş olup, veritabanı olarak MongoDB ve nesne modelleme için Mongoose kullanılmaktadır.

Bu proje, **Helsinki Üniversitesi'nin Full Stack Open kursunun (Bölüm 4 Egzersizleri) bir parçasıdır.**  

---

## 🚀 Özellikler  
- Blog gönderileri için CRUD işlemleri
- JWT ile kullanıcı kimlik doğrulaması
- Kullanıcı kaydı ve oturum açma
- Bcrypt ile parola şifreleme
- Token tabanlı kimlik doğrulama
- Mongoose veri doğrulama
- Günlük kaydı, hata yönetimi ve kimlik doğrulama için ara katmanlar
- Jest ve Supertest kullanarak birim ve entegrasyon testleri

---

## 📺 Doğrulama ve Veri Bütünlüğü  
Bu API, veri bütünlüğünü sağlamak için **Mongoose doğrulaması** içerir:  
- Blog başlığı ve URL gereklidir.  
- Kullanıcılar benzersiz bir kullanıcı adına sahip olmalıdır.  
- Parolalar saklanmadan önce şifrelenir.

---

## 📺 ESLint ile Kod Kalitesi  
Bu proje, temiz ve tutarlı kod sağlamak için **ESLint** tarafından zorlanan kod kalitesi standartlarını takip eder.  

Lint hatalarını kontrol etmek için:  
```sh
npm run lint
```  
Lint hatalarını otomatik olarak düzeltmek için:  
```sh
npx eslint . --fix
```  

---

## 📺 Testler  
Bu proje, işlevselliği sağlamak ve gerilemeleri önlemek için Jest ve Supertest kullanarak **birim ve entegrasyon testleri** içerir.  

### Testleri Çalıştırma
Tüm testleri çalıştırın:
```sh
npm test
```

Testleri izleme modunda çalıştırın:
```sh
npm test -- --watch
```

Test kapsama raporu oluşturun:
```sh
npm test -- --coverage
```

---

## 🛠️ Kurulum & Yükleme  

### 1️⃣ Depoyu Klonlayın  
```sh
git clone https://github.com/CotNeo/fullstack-open.git
cd fullstack-open
```  

### 2️⃣ Bağımlılıkları Yükleyin  
```sh
npm install
```  

### 3️⃣ MongoDB Yapılandırması (Veritabanı Kurulumu)  
Kök dizinde `.env` adında bir dosya oluşturun ve veritabanı kimlik bilgilerinizi ekleyin:
```sh
MONGO_URI=mongodb+srv://your-username:your-password@cluster0.mongodb.net/blogApp?retryWrites=true&w=majority
SECRET_KEY=your_secret_key
```  

`.env` dosyasının `.gitignore` içine eklendiğinden emin olun.  

### 4️⃣ Sunucuyu Başlatın  
**Nodemon** ile geliştirme modunda çalıştırın:  
```sh
npm run dev
```  
Prodüksiyon modunda çalıştırın:  
```sh
npm start
```  

---

## 📚 API Uç Noktaları  

| Yöntem | Uç Nokta        | Açıklama                 |
|--------|----------------|--------------------------|
| GET    | `/api/blogs`   | Tüm blogları getir       |
| GET    | `/api/blogs/:id` | Belirli bir blogu getir  |
| POST   | `/api/blogs`   | Yeni bir blog ekle       |
| PUT    | `/api/blogs/:id` | Bir blogu güncelle     |
| DELETE | `/api/blogs/:id` | Bir blogu sil           |
| POST   | `/api/users`   | Yeni bir kullanıcı kaydet |
| POST   | `/api/login`   | Kullanıcıyı kimlik doğrulama & token al |

---

## 💂️ Proje Yapısı  

```
blog-list-api/
│— package.json         # Proje bağımlılıkları  
│— package-lock.json    # Bağımlılık kilit dosyası  
│— index.js             # Ana uygulama dosyası  
│— .gitignore           # Gereksiz dosyaları yok say  
│— .env                 # Ortam değişkenleri (GitHub'a yüklenmez)  
├── controllers/         # İstek yöneticileri  
│   ├─ blogs.js         # Blog ile ilgili denetleyiciler  
│   ├─ users.js         # Kullanıcı ile ilgili denetleyiciler  
│   └─ login.js         # Kimlik doğrulama  
├─ models/  
│   ├─ blog.js          # Blog şeması  
│   └─ user.js          # Kullanıcı şeması  
├─ utils/  
│   ├─ config.js        # Yapılandırma ayarları  
│   ├─ logger.js        # Günlük kaydı aracı  
│   └─ middleware.js    # Ara katman fonksiyonları  
```

---

💡 **Katkılar ve geri bildirimler memnuniyetle karşılanır! Bir pull request göndermekten çekinmeyin.** 🚀