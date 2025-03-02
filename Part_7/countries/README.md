# 📘 Helsinki University - Full Stack Open (Part 7.7: Country Hook)

This project was created as part of **Exercise 7 in Part 7 of the Helsinki University Full Stack Open course**. 🚀  
The goal is to **develop an application that retrieves country details based on a given country name using a custom React hook called `useCountry`**.

---

## 📂 Project Structure
```
📦 COUNTRIES
 ┣ 📂 src
 ┃ ┣ 📂 components
 ┃ ┃ ┣ 📄 CountryDetails.jsx    # Component displaying selected country details
 ┃ ┃ ┣ 📄 CountryList.jsx       # Component displaying the list of countries
 ┃ ┃ ┣ 📄 SearchBar.jsx         # Country search bar
 ┃ ┃ ┗ 📄 Weather.jsx           # Weather component
 ┃ ┣ 📂 hooks
 ┃ ┃ ┗ 📄 useCountry.js         # Custom hook: Fetches country details
 ┃ ┣ 📂 services
 ┃ ┃ ┣ 📄 countryService.js     # Manages country API service calls
 ┃ ┃ ┗ 📄 weatherService.js     # Manages weather API service calls
 ┃ ┣ 📄 App.jsx                 # Main application component
 ┃ ┣ 📄 index.css               # Global styles
 ┃ ┣ 📄 main.jsx                # React entry point
 ┣ 📂 public
 ┃ ┗ 📄 index.html              # HTML entry point
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
| **React Hooks** | Using `useEffect` and `useState`  |
| **Axios**       | For making HTTP requests         |
| **REST Countries API** | To retrieve country details |
| **Vite**        | For fast React development      |

---

## 📌 Features

✅ **Country Search** (Retrieves country details when a country name is entered.)  
✅ **Display Country Details** (Flag, capital, population, etc.)  
✅ **Show Warning if No Country Found**  
✅ **Fetch Weather Information from API**  
✅ **Use Custom `useCountry` Hook for API Calls**  

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

📘 **This project covers Exercise 7 in Part 7 of the Helsinki University Full Stack Open course.**  
🚀 **It aims to practice dynamic data fetching and displaying country details using React Hooks.**

# 📘 Helsinki Üniversitesi - Full Stack Open (Bölüm 7.7: Country Hook)

Bu proje, **Helsinki Üniversitesi'nin Full Stack Open kursunun 7. bölüm 7. egzersizi** kapsamında oluşturulmuştur. 🚀
Amaç, **React'te özel bir hook olan `useCountry` oluşturarak, verilen ülke adına göre ülke bilgilerini getiren bir uygulama geliştirmektir**.

---

## 📂 Proje Yapısı
```
📦 COUNTRIES
 ┣ 📂 src
 ┃ ┣ 📂 components
 ┃ ┃ ┣ 📄 CountryDetails.jsx    # Seçilen ülkenin detaylarını gösteren bileşen
 ┃ ┃ ┣ 📄 CountryList.jsx       # Ülke listesini gösteren bileşen
 ┃ ┃ ┣ 📄 SearchBar.jsx         # Ülke arama çubuğu
 ┃ ┃ ┗ 📄 Weather.jsx           # Hava durumu bileşeni
 ┃ ┣ 📂 hooks
 ┃ ┃ ┗ 📄 useCountry.js         # Özel hook: Ülke bilgilerini getiren fonksiyon
 ┃ ┣ 📂 services
 ┃ ┃ ┣ 📄 countryService.js     # Ülke API servis çağrılarını yöneten dosya
 ┃ ┃ ┗ 📄 weatherService.js     # Hava durumu API servis çağrılarını yöneten dosya
 ┃ ┣ 📄 App.jsx                 # Ana uygulama bileşeni
 ┃ ┣ 📄 index.css               # Genel stiller
 ┃ ┣ 📄 main.jsx                # React giriş noktası
 ┣ 📂 public
 ┃ ┗ 📄 index.html              # HTML giriş noktası
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
| **React Hooks** | useEffect ve useState kullanımı    |
| **Axios**       | HTTP isteklerini yapmak için       |
| **REST Countries API** | Ülke bilgilerini almak için |
| **Vite**        | React geliştirme ortamı için       |

---

## 📌 Özellikler

✅ **Ülke Arama** (Ülke adı girildiğinde ilgili ülkenin detaylarını getirir.)
✅ **Bulunan Ülke Detaylarını Gösterme** (Bayrak, başkent, nüfus vb.)
✅ **Ülke Bulunamazsa Kullanıcıya Uyarı Gösterme**
✅ **Hava Durumu Bilgilerini API'den Getirme**
✅ **Özel `useCountry` Hook'u ile API Çağrısı Yapma**

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

📘 **Bu proje, Helsinki Üniversitesi Full Stack Open kursunun 7. bölüm 7. egzersizini kapsar.**
🚀 **React Hook kullanarak dinamik veri çağırma ve ülke detaylarını gösterme konusunda pratik yapmayı hedefler.**