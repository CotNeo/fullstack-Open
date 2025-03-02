# 📘 Helsinki University - Full Stack Open (Part 7: Advanced React Applications)

This project was developed as part of **Part 7 of the Helsinki University Full Stack Open course**. 🚀
The goal is to **build an advanced React application using React Router, Redux, React Query, Context API, and custom hooks**.

---

## 📂 Project Structure
```
📦 FULLSTACK-OPEN-PART-7
 ┣ 📂 routed-anecdotes      # Routing exercises with React Router
 ┃ ┣ 📂 src
 ┃ ┃ ┣ 📂 components
 ┃ ┃ ┣ 📂 hooks
 ┃ ┃ ┣ 📄 App.jsx
 ┃ ┃ ┣ 📄 main.jsx
 ┃ ┃ ┗ 📄 index.html
 ┣ 📂 country-hook          # API calls using custom hooks
 ┃ ┣ 📂 src
 ┃ ┃ ┣ 📂 components
 ┃ ┃ ┣ 📂 hooks
 ┃ ┃ ┣ 📂 services
 ┃ ┃ ┣ 📄 App.jsx
 ┃ ┃ ┣ 📄 main.jsx
 ┃ ┃ ┗ 📄 index.html
 ┣ 📂 ultimate-hooks        # General backend communication using custom hooks
 ┃ ┣ 📂 src
 ┃ ┃ ┣ 📂 hooks
 ┃ ┃ ┣ 📄 App.jsx
 ┃ ┃ ┣ 📄 main.jsx
 ┃ ┃ ┗ 📄 index.html
 ┣ 📂 bloglist              # Blog management using Redux and React Query
 ┃ ┣ 📂 client
 ┃ ┃ ┣ 📂 components
 ┃ ┃ ┣ 📂 pages
 ┃ ┃ ┣ 📂 reducers
 ┃ ┃ ┣ 📂 services
 ┃ ┃ ┣ 📄 App.jsx
 ┃ ┃ ┣ 📄 store.js
 ┃ ┃ ┗ 📄 main.jsx
 ┃ ┣ 📂 server
 ┃ ┃ ┣ 📂 controllers
 ┃ ┃ ┣ 📂 models
 ┃ ┃ ┣ 📂 tests
 ┃ ┃ ┣ 📄 app.js
 ┃ ┃ ┗ 📄 index.js
 ┣ 📄 README.md             # This file (Documentation)
 ┗ 📄 package.json          # Project dependencies
```

---

## 🛠 Installation and Running the Project

Follow these steps to run the project. 🚀

### 📌 **1. Install Required Dependencies**

Run the following command in each project directory to install dependencies:

```bash
npm install
```

### 📌 **2. Start the Backend Server (For Bloglist Project)**

```bash
npm run server
```

By default, it runs at **[http://localhost:3001](http://localhost:3001)**.

### 📌 **3. Start the React Applications**

Run the following command in each project directory to start the React applications:

```bash
npm run dev
```

Go to **[http://localhost:5173](http://localhost:5173)** to open the application.

---

## 🚀 Technologies Used

| Technology      | Description                          |
| -------------- | ---------------------------------- |
| **React**       | For building the user interface   |
| **React Router**| For page navigation              |
| **Redux**       | For global state management      |
| **React Query** | For data fetching and caching    |
| **Context API** | For state management            |
| **Axios**       | For making HTTP requests         |
| **Node.js**     | For backend development          |
| **Express**     | For creating the API server      |
| **MongoDB**     | For database management         |
| **Mongoose**    | MongoDB ORM library             |

---

## 📌 Exercises in Part 7

✅ **7.1 - 7.3:** Routing with React Router and notification management  
✅ **7.4 - 7.6:** Form management using the custom `useField` hook  
✅ **7.7:** API calls using the custom `useCountry` hook  
✅ **7.8:** Backend communication using the custom `useResource` hook  
✅ **7.9:** Code formatting with ESLint and Prettier  
✅ **7.10 - 7.13:** State management with Redux and React Query  
✅ **7.14 - 7.16:** User and blog views  
✅ **7.17 - 7.19:** Navigation menu and adding comments  
🚨 **7.20 - 7.21:** **Design improvements not implemented.**

---

## 🎯 Development and Contribution

1. **Fork the Project:**
   ```bash
   git clone https://github.com/CotNeo/fullstack-open.git
   ```
2. **Create a New Branch:**
   ```bash
   git checkout -b new-feature
   ```
3. **Make Changes and Commit:**
   ```bash
   git commit -m "Added a new feature"
   ```
4. **Push Changes:**
   ```bash
   git push origin new-feature
   ```
5. **Open a Pull Request and Wait for Review.** 🎉

---

📘 **This project covers the exercises from Part 7 of the Helsinki University Full Stack Open course.**  
🚀 **It provides hands-on experience in building advanced applications using React Router, Redux, React Query, and custom hooks.**





# 📘 Helsinki Üniversitesi - Full Stack Open (Part 7: Gelişmiş React Uygulamaları)

Bu proje, **Helsinki Üniversitesi'nin Full Stack Open kursunun 7. bölümü** kapsamında geliştirilmiştir. 🚀
Amaç, **React Router, Redux, React Query, Context API ve özel hook'ları kullanarak gelişmiş bir React uygulaması geliştirmektir**.

---

## 📂 Proje Yapısı
```
📦 FULLSTACK-OPEN-PART-7
 ┣ 📂 routed-anecdotes      # React Router ile yönlendirme egzersizleri
 ┃ ┣ 📂 src
 ┃ ┃ ┣ 📂 components
 ┃ ┃ ┣ 📂 hooks
 ┃ ┃ ┣ 📄 App.jsx
 ┃ ┃ ┣ 📄 main.jsx
 ┃ ┃ ┗ 📄 index.html
 ┣ 📂 country-hook          # Özel Hook ile API çağrıları egzersizleri
 ┃ ┣ 📂 src
 ┃ ┃ ┣ 📂 components
 ┃ ┃ ┣ 📂 hooks
 ┃ ┃ ┣ 📂 services
 ┃ ┃ ┣ 📄 App.jsx
 ┃ ┃ ┣ 📄 main.jsx
 ┃ ┃ ┗ 📄 index.html
 ┣ 📂 ultimate-hooks        # Özel Hook ile genel backend iletişimi
 ┃ ┣ 📂 src
 ┃ ┃ ┣ 📂 hooks
 ┃ ┃ ┣ 📄 App.jsx
 ┃ ┃ ┣ 📄 main.jsx
 ┃ ┃ ┗ 📄 index.html
 ┣ 📂 bloglist              # Redux ve React Query ile blog yönetimi
 ┃ ┣ 📂 client
 ┃ ┃ ┣ 📂 components
 ┃ ┃ ┣ 📂 pages
 ┃ ┃ ┣ 📂 reducers
 ┃ ┃ ┣ 📂 services
 ┃ ┃ ┣ 📄 App.jsx
 ┃ ┃ ┣ 📄 store.js
 ┃ ┃ ┗ 📄 main.jsx
 ┃ ┣ 📂 server
 ┃ ┃ ┣ 📂 controllers
 ┃ ┃ ┣ 📂 models
 ┃ ┃ ┣ 📂 tests
 ┃ ┃ ┣ 📄 app.js
 ┃ ┃ ┗ 📄 index.js
 ┣ 📄 README.md             # Bu dosya (Dökümantasyon)
 ┗ 📄 package.json          # Proje bağımlılıkları
```

---

## 🛠 Kurulum ve Çalıştırma

Bu projeyi çalıştırmak için aşağıdaki adımları takip edebilirsiniz. 🚀

### 📌 **1. Gerekli Bağımlılıkları Yükleyin**

Her bir proje dizininde aşağıdaki komutu çalıştırarak bağımlılıkları yükleyin:

```bash
npm install
```

### 📌 **2. Backend Sunucusunu Başlatın (Bloglist Projesi İçin)**

```bash
npm run server
```

Varsayılan olarak **[http://localhost:3001](http://localhost:3001)** adresinde çalışır.

### 📌 **3. React Uygulamalarını Başlatın**

Her bir proje dizininde aşağıdaki komutu çalıştırarak React uygulamalarını başlatın:

```bash
npm run dev
```

Uygulamayı açmak için **[http://localhost:5173](http://localhost:5173)** adresine gidin.

---

## 🚀 Kullanılan Teknolojiler

| Teknoloji       | Açıklama                            |
| --------------- | ----------------------------------- |
| **React**       | Kullanıcı arayüzü için             |
| **React Router**| Sayfa yönlendirmeleri için         |
| **Redux**       | Global state yönetimi için         |
| **React Query** | Veri yönetimi ve caching için      |
| **Context API** | Durum yönetimi için                |
| **Axios**       | HTTP isteklerini yapmak için       |
| **Node.js**     | Backend geliştirme için            |
| **Express**     | API sunucusu oluşturmak için       |
| **MongoDB**     | Veri tabanı yönetimi için          |
| **Mongoose**    | MongoDB ORM kütüphanesi            |

---

## 📌 Part 7 İçindeki Egzersizler

✅ **7.1 - 7.3:** React Router ile yönlendirme ve bildirim yönetimi  
✅ **7.4 - 7.6:** Özel Hook `useField` ile form yönetimi  
✅ **7.7:** Özel Hook `useCountry` ile API çağrıları  
✅ **7.8:** Özel Hook `useResource` ile backend iletişimi  
✅ **7.9:** ESLint ve Prettier ile kod biçimlendirme  
✅ **7.10 - 7.13:** Redux ve React Query ile durum yönetimi  
✅ **7.14 - 7.16:** Kullanıcı ve blog görünümü  
✅ **7.17 - 7.19:** Navigasyon menüsü ve yorum ekleme  
🚨 **7.20 - 7.21:** **Tasarım geliştirmeleri yapılmadı.**

---

## 🎯 Geliştirme ve Katkıda Bulunma

1. **Projeyi Forkla:**
   ```bash
   git clone https://github.com/CotNeo/fullstack-open.git
   ```
2. **Yeni Bir Branch Oluştur:**
   ```bash
   git checkout -b yeni-ozellik
   ```
3. **Geliştirme Yap ve Commit Et:**
   ```bash
   git commit -m "Yeni özellik eklendi"
   ```
4. **Değişiklikleri Gönder:**
   ```bash
   git push origin yeni-ozellik
   ```
5. **Pull Request Aç ve İnceleme Bekle.** 🎉

---

📘 **Bu proje, Helsinki Üniversitesi Full Stack Open kursunun 7. bölüm egzersizlerini kapsar.**
🚀 **React Router, Redux, React Query ve özel hook'lar ile gelişmiş bir uygulama geliştirme pratiği sağlar.**

