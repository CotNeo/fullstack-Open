# 📘 Helsinki University - Full Stack Open (Part 7.8: Ultimate Hooks)

This project was created as part of **Exercise 8 in Part 7 of the Helsinki University Full Stack Open course**. 🚀  
The goal is to **create a custom hook called `useResource` that manages backend communication to improve reusability**.

---

## 📂 Project Structure
```
📦 ULTIMATE-HOOKS
 ┣ 📂 src
 ┃ ┣ 📂 hooks
 ┃ ┃ ┣ 📄 hooks.js             # Utility hooks
 ┃ ┃ ┗ 📄 useResource.js       # Custom hook for general backend communication
 ┃ ┣ 📄 App.jsx                # Main application component
 ┃ ┣ 📄 main.jsx               # React entry point
 ┣ 📂 public
 ┃ ┗ 📄 index.html             # HTML entry point
 ┣ 📄 .gitignore               # Git ignore file
 ┣ 📄 db.json                  # Fake database for JSON Server
 ┣ 📄 package.json             # Project dependencies
 ┣ 📄 package-lock.json        # Locked dependency versions
 ┣ 📄 README.md                # This file (Documentation)
 ┣ 📄 vite.config.js           # Vite configuration file
 ┗ 📄 eslintrc.cjs             # ESLint configuration file
```

---

## 🛠 Installation and Running the Project

Follow these steps to run the project. 🚀

### 📌 **1. Install Required Dependencies**

```bash
npm install
```

### 📌 **2. Start JSON Server**

To run the **JSON Server** that provides data for the application:

```bash
npm run server
```

By default, it runs at **[http://localhost:3005](http://localhost:3005)**.

### 📌 **3. Start the React Application**

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
| **JSON Server** | For creating a mock backend     |
| **Vite**        | For fast React development      |

---

## 📌 Features

✅ **Data Management for Notes and People**  
✅ **Reusable `useResource` Hook**  
✅ **Adding New Notes and People**  
✅ **Dynamic Data Integration with Backend**  

The `useResource` hook enables unified data management for notes and people. **This hook returns an array with two elements:**
- First element: An array containing all resources
- Second element: An object with functions to manage resources (e.g., adding new data)

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

📘 **This project covers Exercise 8 in Part 7 of the Helsinki University Full Stack Open course.**  
🚀 **It aims to build flexible and reusable custom hooks for backend communication.**


# 📘 Helsinki Üniversitesi - Full Stack Open (Bölüm 7.8: Ultimate Hooks)

Bu proje, **Helsinki Üniversitesi'nin Full Stack Open kursunun 7. bölüm 8. egzersizi** kapsamında oluşturulmuştur. 🚀
Amaç, **tekrar kullanılabilirliği artırmak için backend ile iletişimi yöneten `useResource` adlı özel bir hook oluşturmak**.

---

## 📂 Proje Yapısı
```
📦 ULTIMATE-HOOKS
 ┣ 📂 src
 ┃ ┣ 📂 hooks
 ┃ ┃ ┣ 📄 hooks.js             # Yardımcı hook'lar
 ┃ ┃ ┗ 📄 useResource.js       # Genel backend iletişimini sağlayan özel hook
 ┃ ┣ 📄 App.jsx                # Ana uygulama bileşeni
 ┃ ┣ 📄 main.jsx               # React giriş noktası
 ┣ 📂 public
 ┃ ┗ 📄 index.html             # HTML giriş noktası
 ┣ 📄 .gitignore               # Git ignorları
 ┣ 📄 db.json                  # JSON Server için sahte veri tabanı
 ┣ 📄 package.json             # Proje bağımlılıkları
 ┣ 📄 package-lock.json        # Bağımlılıkların sabitlenmiş versiyonu
 ┣ 📄 README.md                # Bu dosya (Dökümantasyon)
 ┣ 📄 vite.config.js           # Vite yapılandırma dosyası
 ┗ 📄 eslintrc.cjs             # ESLint yapılandırma dosyası
```

---

## 🛠 Kurulum ve Çalıştırma

Bu projeyi çalıştırmak için aşağıdaki adımları takip edebilirsiniz. 🚀

### 📌 **1. Gerekli Bağımlılıkları Yükleyin**

```bash
npm install
```

### 📌 **2. JSON Server'ı Başlatın**

Uygulamaya veri sağlayan **JSON Server’ı** çalıştırmak için:

```bash
npm run server
```

Varsayılan olarak **[http://localhost:3005](http://localhost:3005)** adresinde çalışır.

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
| **React Hooks** | useEffect ve useState kullanımı    |
| **Axios**       | HTTP isteklerini yapmak için       |
| **JSON Server** | Sahte backend servisi oluşturmak için |
| **Vite**        | React geliştirme ortamı için       |

---

## 📌 Özellikler

✅ **Notlar ve Kişiler İçin Veri Yönetimi**  
✅ **Genel Kullanım İçin `useResource` Hook'u**  
✅ **Yeni Not ve Kişi Ekleme**  
✅ **Backend ile Dinamik Veri Entegrasyonu**  

`useResource` hook'u sayesinde notlar ve kişiler için ortak bir veri yönetimi sağlanmıştır. **Bu hook, state hook'ları gibi iki öğe içeren bir dizi döndürür:**
- İlk öğe: Tüm kaynakları içeren dizi
- İkinci öğe: Kaynakları yönetmek için fonksiyonlar içeren nesne (örneğin, yeni veri ekleme)

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

📘 **Bu proje, Helsinki Üniversitesi Full Stack Open kursunun 7. bölüm 8. egzersizini kapsar.**
🚀 **Backend iletişimi için esnek ve tekrar kullanılabilir özel hook yapıları oluşturmayı hedefler.**

***