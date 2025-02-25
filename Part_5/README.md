# 🌟 Full Stack Open 2025 - Part 5: Blog List Application

This project is part of the **Full Stack Open** course by the **University of Helsinki**. It covers frontend implementation, authentication, CRUD operations, state management, and **End-to-End (E2E) testing** using **Cypress** and **Playwright**.

---

## 📌 Table of Contents

- [Introduction](#introduction)
- [Project Structure](#project-structure)
- [Setup & Installation](#setup--installation)
- [Implemented Features](#implemented-features)
- [Testing](#testing)
- [Exercises Breakdown](#exercises-breakdown)
- [Technologies Used](#technologies-used)
- [Contributors](#contributors)

---

## 🚀 Introduction

This repository is designed to enhance frontend testing skills while integrating a blog list application with a Node.js backend. It includes:
✅ **User Authentication** (Login, Logout, Local Storage Persistence)\
✅ **Blog Management** (Create, Read, Update, Delete)\
✅ **Likes & Sorting** (Sorting by likes)\
✅ **Form Handling** (Toggleable UI, Controlled Inputs)\
✅ **Notifications** (Success & Error Messages)\
✅ **Testing** (Unit, Integration, E2E with Cypress & Playwright)

---

## 📂 Project Structure

```
bloglist-frontend/
│── src/
│   ├── components/         # Reusable UI Components
│   ├── services/           # API Interaction & Backend Requests
│   ├── tests/              # Unit & E2E Tests
│   ├── App.jsx             # Main Application Component
│   ├── index.jsx           # React Entry Point
│── public/                 # Static Files
│── cypress/                # Cypress E2E Tests
│── playwright/             # Playwright Configurations
│── package.json            # Dependencies & Scripts
│── README.md               # This File 📄
```

---

## 🛠 Setup & Installation

To set up the project locally:
1️⃣ **Clone the repository**

```bash
git clone https://github.com/CotNeo/fullstack-open.git
cd fullstack-open
```

2️⃣ **Install dependencies**

```bash
npm install
```

3️⃣ **Run the development server**

```bash
npm run dev
```

4️⃣ **Run Cypress Tests**

```bash
npx cypress open
```

5️⃣ **Run Playwright Tests**

```bash
npx playwright test
```

---

## ✨ Implemented Features

### 🔐 Authentication

- User login/logout using backend authentication.
- JWT Token storage & auto-login with Local Storage.

### 📝 Blog Management

- Create a new blog.
- View all blogs sorted by likes.
- Like & delete blogs (only by the creator).

### 🎨 UI/UX Improvements

- Toggleable blog details.
- Notifications for actions (Success/Error Messages).
- Responsive & clean design with **TailwindCSS**.

---

## 🧪 Testing

### ✅ Unit & Integration Tests

- **React Testing Library** for testing components.
- **Mock functions** to simulate API interactions.

### 🌍 End-to-End (E2E) Tests

- **Cypress** for frontend interaction testing.
- **Playwright** for browser-based automation.

---

## 📌 Exercises Breakdown

### **🟢 Blog List Frontend**

🔹 **5.1**: Implement login functionality.\
🔹 **5.2**: Persist login state using Local Storage.\
🔹 **5.3**: Allow logged-in users to create new blogs.\
🔹 **5.4**: Implement notification messages.\
🔹 **5.5**: Toggle visibility for new blog form.\
🔹 **5.6**: Separate BlogForm into its own component.\
🔹 **5.7**: Implement toggle button for viewing blog details.\
🔹 **5.8**: Implement like functionality.\
🔹 **5.9**: Fix missing user information in blogs.\
🔹 **5.10**: Sort blogs based on the number of likes.\
🔹 **5.11**: Implement delete functionality with confirmation.\
🔹 **5.12**: Add **PropTypes** and ESLint configuration.

### **🔵 Blog List Tests**

🔹 **5.13 - 5.16**: Unit tests for blog components & form functionality.

### **🟠 End-to-End (E2E) Testing**

🔹 **5.17 - 5.23**: Cypress & Playwright tests for login, blog creation, liking, deleting, and ordering by likes.

---

## ⚙️ Technologies Used

- **React** (Frontend UI)
- **Vite** (Development Server)
- **TailwindCSS** (Styling)
- **Cypress** (E2E Testing)
- **Playwright** (E2E Testing)
- **React Testing Library** (Unit & Integration Tests)
- **Node.js + Express** (Backend API)
- **MongoDB + Mongoose** (Database)

---

## 👥 Contributors

This project is part of the **Full Stack Open** course from the **University of Helsinki**. Contributions are welcome! 🎉

---

## 📜 License

This project is licensed under the **MIT License**. Feel free to modify and share!

Happy coding! 🚀

# 🌟 Full Stack Open 2025 - Bölüm 5: Blog Listesi Uygulaması

Bu proje, **Helsinki Üniversitesi** tarafından sunulan **Full Stack Open** kursunun bir parçasıdır. Frontend uygulaması, kimlik doğrulama, CRUD işlemleri, durum yönetimi ve **Uçtan Uca (E2E) testler** için **Cypress** ve **Playwright** kullanımı konularını kapsar.

---

## 📌 İçindekiler

- [Giriş](#giriş)
- [Proje Yapısı](#proje-yapısı)
- [Kurulum ve Yükleme](#kurulum-ve-yükleme)
- [Gerçekleştirilen Özellikler](#gerçekleştirilen-özellikler)
- [Testler](#testler)
- [Egzersiz Dağılımı](#egzersiz-dağılımı)
- [Kullanılan Teknolojiler](#kullanılan-teknolojiler)
- [Katkıda Bulunanlar](#katkıda-bulunanlar)

---

## 🚀 Giriş

Bu depo, bir blog listesi uygulamasını Node.js backend ile entegre ederken frontend test becerilerini geliştirmek amacıyla tasarlanmıştır. İçerdiği özellikler:
✅ **Kullanıcı Kimlik Doğrulama** (Giriş, Çıkış, Local Storage ile Kalıcılık)
✅ **Blog Yönetimi** (Oluşturma, Okuma, Güncelleme, Silme)
✅ **Beğeni ve Sıralama** (Beğeniye göre sıralama)
✅ **Form Yönetimi** (Açılır kapanır UI, Kontrollü Girişler)
✅ **Bildirimler** (Başarı & Hata Mesajları)
✅ **Testler** (Birim, Entegrasyon, Cypress & Playwright ile E2E)

---

## 📂 Proje Yapısı

```
bloglist-frontend/
│── src/
│   ├── components/         # Yeniden kullanılabilir UI bileşenleri
│   ├── services/           # API Etkileşimi & Backend İstekleri
│   ├── tests/              # Birim & E2E Testler
│   ├── App.jsx             # Ana Uygulama Bileşeni
│   ├── index.jsx           # React Giriş Noktası
│── public/                 # Statik Dosyalar
│── cypress/                # Cypress E2E Testleri
│── playwright/             # Playwright Konfigürasyonları
│── package.json            # Bağımlılıklar & Komutlar
│── README.md               # Bu Dosya 📄
```

---

## 🛠 Kurulum ve Yükleme

Projeyi yerel ortamınıza kurmak için:

1️⃣ **Depoyu klonlayın**

```bash
git clone https://github.com/CotNeo/fullstack-open.git
cd fullstack-open
```

2️⃣ **Bağımlılıkları yükleyin**

```bash
npm install
```

3️⃣ **Geliştirme sunucusunu çalıştırın**

```bash
npm run dev
```

4️⃣ **Cypress Testlerini Çalıştırın**

```bash
npx cypress open
```

5️⃣ **Playwright Testlerini Çalıştırın**

```bash
npx playwright test
```

---

## ✨ Gerçekleştirilen Özellikler

### 🔐 Kimlik Doğrulama

- Backend kimlik doğrulama ile kullanıcı giriş/çıkışı.
- JWT Token depolama & Local Storage ile otomatik giriş.

### 📝 Blog Yönetimi

- Yeni blog oluşturma.
- Beğeniye göre sıralı blogları görüntüleme.
- Blogları beğenme & sadece oluşturan kişinin silmesine izin verme.

### 🎨 UI/UX Geliştirmeleri

- Açılır kapanır blog detayları.
- İşlemler için bildirimler (Başarı/Hata Mesajları).
- **TailwindCSS** ile responsive & temiz tasarım.

---

## 🧪 Testler

### ✅ Birim & Entegrasyon Testleri

- **React Testing Library** ile bileşen testleri.
- **Mock fonksiyonlar** ile API etkileşimlerinin simüle edilmesi.

### 🌍 Uçtan Uca (E2E) Testler

- **Cypress** ile frontend etkileşim testleri.
- **Playwright** ile tarayıcı tabanlı otomasyon.

---

## 📌 Egzersiz Dağılımı

### **🟢 Blog Listesi Frontend**

🔹 **5.1**: Giriş fonksiyonunun uygulanması.
🔹 **5.2**: Local Storage ile oturum durumunun kalıcı hale getirilmesi.
🔹 **5.3**: Giriş yapan kullanıcıların blog oluşturmasına izin verilmesi.
🔹 **5.4**: Bildirim mesajlarının uygulanması.
🔹 **5.5**: Yeni blog formunun görünürlüğünün değiştirilmesi.
🔹 **5.6**: BlogForm'un ayrı bir bileşene taşınması.
🔹 **5.7**: Blog detaylarını görmek için aç/kapat butonunun eklenmesi.
🔹 **5.8**: Beğeni fonksiyonunun uygulanması.
🔹 **5.9**: Bloglardaki eksik kullanıcı bilgilerinin düzeltilmesi.
🔹 **5.10**: Blogların beğeni sayısına göre sıralanması.
🔹 **5.11**: Silme işlemi için onay mekanizmasının eklenmesi.
🔹 **5.12**: **PropTypes** ve ESLint konfigürasyonu eklenmesi.

### **🔵 Blog Listesi Testleri**

🔹 **5.13 - 5.16**: Blog bileşenleri & form işlevselliği için birim testleri.

### **🟠 Uçtan Uca (E2E) Testler**

🔹 **5.17 - 5.23**: Cypress & Playwright ile giriş, blog oluşturma, beğenme, silme ve beğeniye göre sıralama testleri.

---

## ⚙️ Kullanılan Teknolojiler

- **React** (Frontend UI)
- **Vite** (Geliştirme Sunucusu)
- **TailwindCSS** (Stil)
- **Cypress** (E2E Testleri)
- **Playwright** (E2E Testleri)
- **React Testing Library** (Birim & Entegrasyon Testleri)
- **Node.js + Express** (Backend API)
- **MongoDB + Mongoose** (Veritabanı)

---

## 👥 Katkıda Bulunanlar

Bu proje, **Helsinki Üniversitesi** tarafından sunulan **Full Stack Open** kursunun bir parçasıdır. Katkılarınızı bekliyoruz! 🎉

---

## 📜 Lisans

Bu proje **MIT Lisansı** altında lisanslanmıştır. Değiştirip paylaşmaktan çekinmeyin!

Kodlamaya devam! 🚀

