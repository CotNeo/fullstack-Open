# 📘 Helsinki University - Full Stack Open (Part 6 Exercises)

This project has been created as part of the **Full Stack Open course's Part 6 exercises by Helsinki University**. 🚀\
The goal is to **develop an application for managing anecdotes using React Query**.

---

## 📂 Project Structure
```
📦 QUERY-ANECDOTES
 ┣ 📂 src
 ┃ ┣ 📂 components
 ┃ ┃ ┣ 📄 AnecdoteForm.jsx      # Component for adding new anecdotes
 ┃ ┃ ┗ 📄 Notifications.jsx     # Component displaying notifications
 ┃ ┣ 📂 context
 ┃ ┃ ┗ 📄 NotificationsContext.jsx # Context API for managing notifications
 ┃ ┣ 📂 services
 ┃ ┃ ┗ 📄 anecdotes.js          # Service handling backend API communication
 ┃ ┣ 📄 App.jsx                 # Main application component
 ┃ ┣ 📄 main.jsx                # React entry point
 ┃ ┣ 📄 store.js                # React Query Client configuration
 ┣ 📂 public
 ┃ ┗ 📄 index.html              # HTML entry point
 ┣ 📄 .eslintrc.cjs             # ESLint configuration
 ┣ 📄 .gitignore                # Git ignores
 ┣ 📄 db.json                   # JSON Server database
 ┣ 📄 package.json              # Project dependencies
 ┣ 📄 package-lock.json         # Locked dependency versions
 ┣ 📄 README.md                 # This file (Documentation)
 ┣ 📄 server.js                 # JSON Server configuration
 ┗ 📄 vite.config.js            # Vite configuration file
```

---

## 🛠 Installation and Running

Follow the steps below to run this project. 🚀

### 📌 **1. Install Required Dependencies**

```bash
npm install
```

### 📌 **2. Start JSON Server**

To start the **JSON Server** that stores anecdotes:

```bash
npm run server
```

By default, it runs at **[http://localhost:3001/anecdotes](http://localhost:3001/anecdotes)**.

### 📌 **3. Start the React Application**

```bash
npm run dev
```

Go to **[http://localhost:5173](http://localhost:5173)** to open the application.

---

## 🚀 Technologies Used

| Technology       | Description                             |
| --------------- | ----------------------------------- |
| **React**       | To create the user interface        |
| **React Query** | For data management and caching    |
| **Axios**       | To make HTTP requests              |
| **JSON Server** | To create a fake backend           |
| **Vite**        | For React development environment  |

---

## 📌 Features

✅ **Fetch Anecdotes**\
✅ **Add New Anecdote**\
✅ **Vote for an Anecdote**\
✅ **Notifications** (Managed with Context API)

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
   git commit -m "Added new feature"
   ```
4. **Push Changes:**
   ```bash
   git push origin new-feature
   ```
5. **Open a Pull Request and Wait for Review.** 🎉

---

📘 **This project covers the exercises from Part 6 of the Helsinki University Full Stack Open course.**\
🚀 **It aims to practice state management and data synchronization using React Query.**



--------------------------------------------------------
# 📘 Helsinki Üniversitesi - Full Stack Open (Bölüm 6 Egzersizleri)

Bu proje, **Helsinki Üniversitesi'nin Full Stack Open kursunun 6. bölüm egzersizleri** kapsamında oluşturulmuştur. 🚀\
Amaç, **React Query kullanarak anekdot yönetimi yapan bir uygulama geliştirmektir**.

---

## 📂 Proje Yapısı
```
📦 QUERY-ANECDOTES
 ┣ 📂 src
 ┃ ┣ 📂 components
 ┃ ┃ ┣ 📄 AnecdoteForm.jsx      # Yeni anekdot ekleme bileşeni
 ┃ ┃ ┗ 📄 Notifications.jsx     # Bildirimleri gösteren bileşen
 ┃ ┣ 📂 context
 ┃ ┃ ┗ 📄 NotificationsContext.jsx # Bildirimler için Context API
 ┃ ┣ 📂 services
 ┃ ┃ ┗ 📄 anecdotes.js          # Backend API ile iletişimi sağlayan servis
 ┃ ┣ 📄 App.jsx                 # Ana uygulama bileşeni
 ┃ ┣ 📄 main.jsx                # React giriş noktası
 ┃ ┣ 📄 store.js                # React Query Client yapılandırması
 ┣ 📂 public
 ┃ ┗ 📄 index.html              # HTML giriş noktası
 ┣ 📄 .eslintrc.cjs             # ESLint yapılandırması
 ┣ 📄 .gitignore                # Git ignorları
 ┣ 📄 db.json                   # JSON Server veritabanı
 ┣ 📄 package.json              # Proje bağımlılıkları
 ┣ 📄 package-lock.json         # Bağımlılıkların sabitlenmiş versiyonu
 ┣ 📄 README.md                 # Bu dosya (Dökümantasyon)
 ┣ 📄 server.js                 # JSON Server yapılandırması
 ┗ 📄 vite.config.js            # Vite yapılandırma dosyası
```

---

## 🛠 Kurulum ve Çalıştırma

Bu projeyi çalıştırmak için aşağıdaki adımları takip edebilirsiniz. 🚀

### 📌 **1. Gerekli Bağımlılıkları Yükleyin**

```bash
npm install
```

### 📌 **2. JSON Server'ı Başlatın**

Anekdotları saklayan **JSON Server’ı** başlatmak için:

```bash
npm run server
```

Varsayılan olarak **[http://localhost:3001/anecdotes](http://localhost:3001/anecdotes)** adresinde çalışır.

### 📌 **3. React Uygulamasını Başlatın**

```bash
npm run dev
```

Uygulamayı açmak için **[http://localhost:5173](http://localhost:5173)** adresine gidin.

---

## 🚀 Kullanılan Teknolojiler

| Teknoloji       | Açıklama                            |
| --------------- | ----------------------------------- |
| **React**       | Kullanıcı arayüzünü oluşturmak için |
| **React Query** | Veri yönetimi ve caching için       |
| **Axios**       | HTTP isteklerini yapmak için        |
| **JSON Server** | Fake backend oluşturmak için        |
| **Vite**        | React geliştirme ortamı için        |

---

## 📌 Özellikler

✅ **Anekdotları Getirme**\
✅ **Yeni Anekdot Ekleme**\
✅ **Anekdot Oylama**\
✅ **Bildirimler** (Context API ile yönetiliyor)

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

📘 **Bu proje, Helsinki Üniversitesi Full Stack Open kursunun 6. bölüm egzersizlerini kapsar.**\
🚀 **React Query kullanarak state yönetimi ve veri senkronizasyonu konusunda pratik yapmayı hedefler.**

