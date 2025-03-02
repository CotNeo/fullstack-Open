# 📘 Helsinki University - Full Stack Open (Part 7.9 - 7.21: Blog List)

This project was developed as part of **Part 7 of the Helsinki University Full Stack Open course**. 🚀  
The goal is to **build a blog management application using Redux and React Query**.

---

## 📂 Project Structure
```
📦 BLOGLIST
 ┣ 📂 client
 ┃ ┣ 📂 src
 ┃ ┃ ┣ 📂 components         # UI components
 ┃ ┃ ┣ 📂 pages              # Page components
 ┃ ┃ ┣ 📂 reducers           # Redux store reducers
 ┃ ┃ ┣ 📂 services           # API communication services
 ┃ ┃ ┣ 📄 App.jsx            # Main application component
 ┃ ┃ ┣ 📄 index.css          # Global styles
 ┃ ┃ ┣ 📄 main.jsx           # React entry point
 ┃ ┃ ┣ 📄 store.js           # Redux store configuration
 ┃ ┃ ┗ 📄 utils.js           # Utility functions
 ┃ ┣ 📂 public
 ┃ ┃ ┗ 📄 index.html         # HTML entry point
 ┣ 📂 server
 ┃ ┣ 📂 controllers         # API endpoint controllers
 ┃ ┣ 📂 models              # Mongoose database models
 ┃ ┣ 📂 test                # Test files
 ┃ ┣ 📂 utils               # Backend utility functions
 ┃ ┣ 📄 app.js              # Express application
 ┃ ┣ 📄 index.js            # Server entry point
 ┃ ┗ 📄 package.json        # Backend dependencies
 ┣ 📄 .gitignore            # Git ignore file
 ┣ 📄 package.json          # Project dependencies
 ┣ 📄 package-lock.json     # Locked dependency versions
 ┣ 📄 README.md             # This file (Documentation)
 ┗ 📄 vite.config.js        # Vite configuration file
```

---

## 🛠 Installation and Running the Project

Follow these steps to run the project. 🚀

### 📌 **1. Install Required Dependencies**

```bash
npm install
```

### 📌 **2. Start the Backend Server**

```bash
npm run server
```

By default, it runs at **[http://localhost:3001](http://localhost:3001)**.

### 📌 **3. Start the Frontend Application**

```bash
npm run dev
```

Go to **[http://localhost:5173](http://localhost:5173)** to open the application.

---

## 🚀 Technologies Used

| Technology      | Description                          |
| -------------- | ---------------------------------- |
| **React**       | For building the user interface   |
| **Redux**       | For global state management      |
| **React Query** | For data fetching and caching    |
| **Node.js**     | For backend development          |
| **Express**     | For creating the API server      |
| **MongoDB**     | For database management         |
| **Mongoose**    | MongoDB ORM library             |
| **Jest**        | For testing framework           |
| **Supertest**   | For API testing                 |

---

## 📌 Application Features

✅ **Automatic Code Formatting** (Prettier integration)  
✅ **Notification Management with Redux**  
✅ **Blog Data Management with Redux**  
✅ **Like and Delete Blog Functionality**  
✅ **User Authentication and Management with Redux**  
✅ **Alternative Blog Management using React Query**  
✅ **User List View**  
✅ **User Detail Page**  
✅ **Single Blog Page**  
✅ **Commenting System**  
✅ **Navigation Menu**  
✅ **Full Integration with Backend API**  

🚨 **Note:** **7.20 and 7.21 (Design improvements) have not been implemented.**

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
🚀 **It focuses on practicing state management using Redux, React Query, and Context API.**



# 📘 Helsinki Üniversitesi - Full Stack Open (Bölüm 7.9 - 7.21: Blog List)

Bu proje, **Helsinki Üniversitesi'nin Full Stack Open kursunun 7. bölümü** kapsamında geliştirilmiştir. 🚀
Amaç, **Redux ve React Query kullanarak blog yönetimi yapan bir uygulama geliştirmek**.

---

## 📂 Proje Yapısı
```
📦 BLOGLIST
 ┣ 📂 client
 ┃ ┣ 📂 src
 ┃ ┃ ┣ 📂 components         # UI bileşenleri
 ┃ ┃ ┣ 📂 pages              # Sayfa bileşenleri
 ┃ ┃ ┣ 📂 reducers           # Redux store için reducer dosyaları
 ┃ ┃ ┣ 📂 services           # API ile iletişimi sağlayan servisler
 ┃ ┃ ┣ 📄 App.jsx            # Ana uygulama bileşeni
 ┃ ┃ ┣ 📄 index.css          # Genel stiller
 ┃ ┃ ┣ 📄 main.jsx           # React giriş noktası
 ┃ ┃ ┣ 📄 store.js           # Redux store yapılandırması
 ┃ ┃ ┗ 📄 utils.js           # Yardımcı fonksiyonlar
 ┃ ┣ 📂 public
 ┃ ┃ ┗ 📄 index.html         # HTML giriş noktası
 ┣ 📂 server
 ┃ ┣ 📂 controllers         # API endpoint controller'ları
 ┃ ┣ 📂 models              # Mongoose veri modelleri
 ┃ ┣ 📂 test                # Test dosyaları
 ┃ ┣ 📂 utils               # Yardımcı backend fonksiyonları
 ┃ ┣ 📄 app.js              # Express uygulaması
 ┃ ┣ 📄 index.js            # Sunucu başlatma noktası
 ┃ ┗ 📄 package.json        # Backend bağımlılıkları
 ┣ 📄 .gitignore            # Git ignorları
 ┣ 📄 package.json          # Proje bağımlılıkları
 ┣ 📄 package-lock.json     # Bağımlılıkların sabitlenmiş versiyonu
 ┣ 📄 README.md             # Bu dosya (Dökümantasyon)
 ┗ 📄 vite.config.js        # Vite yapılandırma dosyası
```

---

## 🛠 Kurulum ve Çalıştırma

Bu projeyi çalıştırmak için aşağıdaki adımları takip edebilirsiniz. 🚀

### 📌 **1. Gerekli Bağımlılıkları Yükleyin**

```bash
npm install
```

### 📌 **2. Backend Sunucusunu Başlatın**

```bash
npm run server
```

Varsayılan olarak **[http://localhost:3001](http://localhost:3001)** adresinde çalışır.

### 📌 **3. Frontend Uygulamasını Başlatın**

```bash
npm run dev
```

Uygulamayı açmak için **[http://localhost:5173](http://localhost:5173)** adresine gidin.

---

## 🚀 Kullanılan Teknolojiler

| Teknoloji       | Açıklama                            |
| --------------- | ----------------------------------- |
| **React**       | Kullanıcı arayüzünü oluşturmak için |
| **Redux**       | Global state yönetimi için         |
| **React Query** | Veri yönetimi ve caching için      |
| **Node.js**     | Backend geliştirme için            |
| **Express**     | API sunucusu oluşturmak için       |
| **MongoDB**     | Veri tabanı yönetimi için          |
| **Mongoose**    | MongoDB ORM kütüphanesi            |
| **Jest**        | Test framework'ü                   |
| **Supertest**   | API testleri için                  |

---

## 📌 Uygulama Özellikleri

✅ **Otomatik Kod Formatlama** (Prettier entegrasyonu)  
✅ **Redux ile Bildirim Yönetimi**  
✅ **Redux ile Blog Verilerini Yönetme**  
✅ **Blog Beğenme ve Silme İşlevselliği**  
✅ **Redux ile Kullanıcı Bilgilerini Saklama**  
✅ **React Query ile Blog Yönetimi Alternatifi**  
✅ **Kullanıcı Listesi Görünümü**  
✅ **Kullanıcı Detay Sayfası**  
✅ **Tekil Blog Sayfası**  
✅ **Yorum Ekleme Sistemi**  
✅ **Navigasyon Menüsü**  
✅ **Backend API ile Tam Entegrasyon**  

🚨 **Not:** **7.20 ve 7.21 (Tasarım geliştirmeleri) tamamlanmamıştır.**

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
🚀 **Redux, React Query ve Context kullanarak state yönetimi üzerine pratik yapmayı hedefler.**

