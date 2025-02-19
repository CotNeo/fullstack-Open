# 📞 Phonebook Uygulaması (React) / Phonebook Application (React)

Bu proje, kullanıcıların kişi ekleyip güncelleyebileceği, arama yapabileceği ve kişileri silebileceği React tabanlı bir telefon rehberi uygulamasıdır.

This project is a React-based phonebook application where users can add, update, search, and delete contacts.

## 🚀 Özellikler / Features
✅ **Kişi Ekleme / Add Contact** – Kullanıcılar yeni bir isim ve numara ekleyebilir. / Users can add a new name and number.
✅ **Kişi Güncelleme / Update Contact** – Aynı isimle kayıtlı kişi varsa, telefon numarası güncellenir. / If a contact with the same name exists, the phone number will be updated.
✅ **Kişi Silme / Delete Contact** – Kullanıcılar kişileri tek tıkla silebilir. / Users can delete contacts with a single click.
✅ **Arama / Filtreleme / Search / Filtering** – Kullanıcılar büyük/küçük harf duyarsız isim arayabilir. / Users can search for names in a case-insensitive manner.
✅ **Bildirim Sistemi / Notification System** – Kullanıcıya başarılı işlemler ve hatalar hakkında mesaj gösterilir. / Users receive notifications about successful operations and errors.
✅ **JSON Server Kullanımı / JSON Server Usage** – Tüm veriler `http://localhost:3001/persons` adresinde saklanır. / All data is stored at `http://localhost:3001/persons`.
✅ **Modüler Yapı / Modular Structure** – React bileşenleriyle temiz, ölçeklenebilir ve yönetilebilir kod yapısı. / A clean, scalable, and maintainable code structure with React components.

## 📂 Proje Yapısı / Project Structure
```
/phonebook-app
│── /src
│   │── /components
│   │   │── Filter.jsx         # Arama filtresi / Search filter
│   │   │── PersonForm.jsx     # Kişi ekleme formu / Contact form
│   │   │── Persons.jsx        # Kişi listesi / Contact list
│   │   │── Notification.jsx   # Bildirim bileşeni / Notification component
│   │── /services
│   │   │── persons.jsx         # Backend API bağlantıları / Backend API connections
│   │── App.jsx                 # Ana bileşen / Main component
│   │── main.jsx               # React uygulama giriş noktası / React app entry point
│── package.json
│── README.md
```

## 📌 Kullanım / Usage
| Fonksiyon / Function | Açıklama / Description |
|----------------------|------------------------|
| 📌 Yeni Kişi Ekle / Add New Contact | İsim ve telefon numarasını girin, "Add / Update" butonuna tıklayın. / Enter a name and phone number, then click "Add / Update". |
| 📌 Mevcut Kişiyi Güncelle / Update Existing Contact | Aynı ismi girip farklı bir numara ekleyin, eski numara güncellenecektir. / Enter the same name with a different number to update it. |
| 📌 Kişi Silme / Delete Contact | Listeden bir kişinin yanındaki "Delete" butonuna tıklayın. / Click the "Delete" button next to a contact. |
| 📌 Kişi Arama / Search Contact | Arama kutusuna bir isim yazarak filtreleme yapabilirsiniz. / Type a name in the search box to filter contacts. |

## 🚀 Geliştirme ve Çalıştırma / Development & Running

### 📥 Bağımlılıkları Yükleyin / Install Dependencies
```sh
npm install
```

### 🚀 JSON Server'ı Başlatın / Start JSON Server
```sh
npx json-server --watch db.json --port 3001
```
📢 JSON Server verileri şu adreste sunacaktır: `http://localhost:3001/persons` / JSON Server will serve data at `http://localhost:3001/persons`.

### 🚀 React Uygulamasını Çalıştırın / Run React Application
```sh
npm run dev
```

## 🔥 Kullanılan Teknolojiler / Technologies Used
✅ **React** – UI geliştirme / UI development
✅ **Vite** – Daha hızlı derleme süresi / Faster build time
✅ **Axios** – HTTP istek yönetimi / HTTP request handling
✅ **JSON Server** – Backend API simülasyonu / Backend API simulation
✅ **React Hooks** – `useState`, `useEffect`

## 🛠️ Hata Giderme / Troubleshooting
Eğer herhangi bir hata alırsanız, aşağıdaki komutlarla geliştirme sunucusunu yeniden başlatabilirsiniz: / If you encounter any errors, restart the development server using the following commands:
```sh
npx json-server --watch db.json --port 3001
npm run dev
```
Tarayıcı konsolunda hata mesajlarını kontrol edin ve hatalara göre çözüm uygulayın. / Check the browser console for error messages and apply fixes accordingly.

---
Bu proje, **Helsinki Üniversitesi Full Stack Open Kursu - Part 2** kapsamında geliştirilmiştir. / This project was developed as part of **Helsinki University's Full Stack Open Course - Part 2**.
