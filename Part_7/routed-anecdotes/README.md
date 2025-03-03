# 📘 Helsinki University - Full Stack Open (Part 7 Exercises)

This project was created as part of **the Part 7 exercises of the Helsinki University Full Stack Open course**. 🚀  
The goal is to **develop an application that manages anecdotes using React Router**.

---

## 📂 Project Structure
```
📦 ROUTED-ANECDOTES
 ┣ 📂 src
 ┃ ┣ 📂 components
 ┃ ┃ ┣ 📄 About.jsx             # About page
 ┃ ┃ ┣ 📄 Anecdote.jsx          # Single anecdote page
 ┃ ┃ ┣ 📄 AnecdoteList.jsx      # Component displaying the list of anecdotes
 ┃ ┃ ┣ 📄 CreateNew.jsx         # Component for adding new anecdotes
 ┃ ┃ ┣ 📄 Footer.jsx            # Page footer
 ┃ ┃ ┣ 📄 Menu.jsx              # Navigation menu
 ┃ ┃ ┣ 📄 Notification.jsx      # Component displaying notification messages
 ┃ ┣ 📂 hooks
 ┃ ┃ ┗ 📄 index.js             # Custom `useField` hook
 ┃ ┣ 📄 App.jsx                 # Main application component
 ┃ ┣ 📄 App.css                 # Global styles
 ┃ ┣ 📄 main.jsx                # React entry point
 ┣ 📂 public
 ┃ ┗ 📄 index.html              # HTML entry point
 ┣ 📄 .eslintrc.cjs             # ESLint configuration
 ┣ 📄 .gitignore                # Git ignore file
 ┣ 📄 package.json              # Project dependencies
 ┣ 📄 package-lock.json         # Locked dependency versions
 ┣ 📄 README.md                 # This file (Documentation)
 ┣ 📄 vite.config.js            # Vite configuration file
```

---

## 🛠 Installation and Running the Project

Follow these steps to run the project. 🚀

### 📌 **1. Install Required Dependencies**

```bash
npm install
```

### 📌 **2. Start the React Application**

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
| **Vite**        | For fast React development      |

---

## 📌 Features

✅ **List Anecdotes** (Homepage at `/`)
✅ **View Single Anecdote** (at `/anecdotes/:id`)
✅ **Add New Anecdote** (at `/create`)
✅ **Success Notifications** (Displayed for 5 seconds)
✅ **Form Management with Custom `useField` Hook**
✅ **Reset Button for Clearing Forms**
✅ **About Page** (at `/about`)

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
🚀 **It aims to practice page navigation using React Router and managing custom hooks effectively.**



# 📘 Helsinki Üniversitesi - Full Stack Open (Bölüm 7 Egzersizleri)

Bu proje, **Helsinki Üniversitesi'nin Full Stack Open kursunun 7. bölüm egzersizleri** kapsamında oluşturulmuştur. 🚀
Amaç, **React Router kullanarak anekdot yönetimi yapan bir uygulama geliştirmektir**.

---

## 📂 Proje Yapısı
```
📦 ROUTED-ANECDOTES
 ┣ 📂 src
 ┃ ┣ 📂 components
 ┃ ┃ ┣ 📄 About.jsx             # Hakkında sayfası
 ┃ ┃ ┣ 📄 Anecdote.jsx          # Tekil anekdot sayfası
 ┃ ┃ ┣ 📄 AnecdoteList.jsx      # Anekdot listesini gösteren bileşen
 ┃ ┃ ┣ 📄 CreateNew.jsx         # Yeni anekdot ekleme bileşeni
 ┃ ┃ ┣ 📄 Footer.jsx            # Sayfa altbilgisi
 ┃ ┃ ┣ 📄 Menu.jsx              # Navigasyon menüsü
 ┃ ┃ ┣ 📄 Notification.jsx      # Bildirim mesajlarını gösteren bileşen
 ┃ ┣ 📂 hooks
 ┃ ┃ ┗ 📄 index.js             # useField özel kancası
 ┃ ┣ 📄 App.jsx                 # Ana uygulama bileşeni
 ┃ ┣ 📄 App.css                 # Genel stiller
 ┃ ┣ 📄 main.jsx                # React giriş noktası
 ┣ 📂 public
 ┃ ┗ 📄 index.html              # HTML giriş noktası
 ┣ 📄 .eslintrc.cjs             # ESLint yapılandırması
 ┣ 📄 .gitignore                # Git ignorları
 ┣ 📄 package.json              # Proje bağımlılıkları
 ┣ 📄 package-lock.json         # Bağımlılıkların sabitlenmiş versiyonu
 ┣ 📄 README.md                 # Bu dosya (Dökümantasyon)
 ┣ 📄 vite.config.js            # Vite yapılandırma dosyası
```

---

## 🛠 Kurulum ve Çalıştırma

Bu projeyi çalıştırmak için aşağıdaki adımları takip edebilirsiniz. 🚀

### 📌 **1. Gerekli Bağımlılıkları Yükleyin**

```bash
npm install
```

### 📌 **2. React Uygulamasını Başlatın**

```bash
npm run dev
```

Uygulamayı açmak için **[http://localhost:5173](http://localhost:5173)** adresine gidin.

---

## 🚀 Kullanılan Teknolojiler

| Teknoloji       | Açıklama                            |
| --------------- | ----------------------------------- |
| **React**       | Kullanıcı arayüzünü oluşturmak için |
| **React Router**| Sayfa yönlendirmeleri için         |
| **Vite**        | React geliştirme ortamı için       |

---

## 📌 Özellikler

✅ **Anekdotları Listeleme** (Ana sayfa `/` adresinde)
✅ **Tekil Anekdot Gösterimi** (`/anecdotes/:id` adresinde)
✅ **Yeni Anekdot Ekleme** (`/create` adresinde)
✅ **Başarılı işlem bildirimleri** (5 saniye görüntülenir)
✅ **Özel useField Hook'u ile Form Yönetimi**
✅ **Reset Butonu ile Form Temizleme**
✅ **Hakkında Sayfası** (`/about` adresinde)

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
🚀 **React Router kullanarak sayfa yönlendirme ve özel hook yönetimi konusunda pratik yapmayı hedefler.**

***