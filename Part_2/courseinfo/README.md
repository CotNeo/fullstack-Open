## Course Information - Full Stack Open (Part 2)

### 📂 Project Structure
```
courseinfo/
│── src/
│   ├── components/
│   │   ├── Course.jsx
│   ├── App.jsx
│   ├── main.jsx
│── package.json
│── vite.config.js
```

### 🔧 Technologies Used
- React
- Vite
- PropTypes (Optional, to prevent ESLint warnings)

### ✨ Features
- ✅ Display courses and their parts  
- ✅ Calculate total exercises  
- ✅ Support multiple courses  

### 🛠 Debugging
If you get ESLint prop-types error and want to ignore it, add this to your `.eslintrc.cjs` file:
```javascript
module.exports = {
  rules: {
    'react/prop-types': 'off'
  }
};
```
Alternatively, you can remove prop-types validation inside `Course.jsx`.

---

## 📌 Hakkında (Türkçe)
Bu proje, **Full Stack Open kursunun Part 2 - Course Information** bölümü kapsamında geliştirilmiştir.  
Uygulama, **React** kullanarak **kurs bilgilerini listelemek** ve **toplam egzersiz sayısını hesaplamak** için tasarlanmıştır.

---

### 🚀 Kurulum
Projeyi klonlayın:
```bash
git clone https://github.com/CotNeo/fullstack-Open.git
```
Bağımlılıkları yükleyin:
```bash
npm install
```
Projeyi çalıştırın:
```bash
npm run dev
```
Tarayıcınızda açın: [http://localhost:5173](http://localhost:5173)

---

### 📂 Proje Yapısı
```
courseinfo/
│── src/
│   ├── components/
│   │   ├── Course.jsx
│   ├── App.jsx
│   ├── main.jsx
│── package.json
│── vite.config.js
```

---

### 🔧 Kullanılan Teknolojiler
- React
- Vite
- PropTypes (Opsiyonel, ESLint hatalarını önlemek için)

---

### ✨ Özellikler
- ✅ Kurs ve bölümleri listeleme  
- ✅ Toplam egzersiz sayısını hesaplama  
- ✅ Birden fazla kurs desteği  

---

### 🛠 Hata Ayıklama
Eğer **ESLint prop-types hatası** veriyorsa ve yok saymak istiyorsanız:

`.eslintrc.cjs` dosyanıza şunu ekleyin:
```javascript
module.exports = {
  rules: {
    'react/prop-types': 'off'
  }
};
```
Alternatif olarak, `Course.jsx` içindeki prop-types kontrolünü kaldırabilirsiniz.

---

### 📝 İletişim
- **GitHub:** [CotNeo](https://github.com/CotNeo)  
- **LinkedIn:** [Furkan Akar](https://www.linkedin.com/in/furkan-akar-7a176618a/)  

---

### ✨ Geliştirmeler
Eğer bu projeyi geliştirmek veya katkıda bulunmak isterseniz, lütfen bir **pull request** gönderin! 🚀

