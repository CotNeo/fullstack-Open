# Bölüm 1 - Full Stack Open Egzersizleri / Part 1 - Full Stack Open Exercises

Bu dizin, Full Stack Open kursunun 1. Bölümü için egzersiz çözümlerini içerir. Her egzersiz, React'in temel kavramlarına odaklanan bağımsız bir proje veya uygulama olarak uygulanmıştır.

This directory contains the solutions for Part 1 of the Full Stack Open course. Each exercise has been implemented as an independent project or application, focusing on fundamental concepts of React.

## Yapı / Structure

```
part1/
├── courseinfo/     # Egzersizler 1.1 - 1.5 / Exercises 1.1 - 1.5
├── unicafe/        # Egzersizler 1.6 - 1.11 / Exercises 1.6 - 1.11
├── anecdotes/      # Egzersizler 1.12 - 1.14 / Exercises 1.12 - 1.14
```

---

## Uygulamalar / Applications

### **1. Course Info**
**Egzersizler 1.1 - 1.5 / Exercises 1.1 - 1.5**

`courseinfo` uygulaması şu kavramları gösterir:
- React bileşenleri / React components
- Veriyi aktarmak için Props kullanımı / Using props to pass data
- Uygulamayı daha küçük, yeniden kullanılabilir bileşenlere bölme / Breaking down the application into smaller reusable components

The `courseinfo` application demonstrates the use of:
- React components
- Props to pass data
- Breaking down the application into smaller reusable components

#### Projeyi Çalıştırma / Running the Project:
1. Dizine gidin / Navigate to the directory:
   ```bash
   cd part1/courseinfo
   ```
2. Bağımlılıkları yükleyin / Install dependencies:
   ```bash
   npm install
   ```
3. Uygulamayı başlatın / Start the application:
   ```bash
   npm start
   ```

---

### **2. Unicafe**
**Egzersizler 1.6 - 1.11 / Exercises 1.6 - 1.11**

`unicafe` uygulaması, kullanıcı geri bildirimlerini toplar ve istatistikler sağlar. Özellikler şunları içerir:
- `useState` ile state yönetimi / Managing state with `useState`
- Kullanıcı etkileşimlerini işleme / Handling user interactions
- Kullanıcı geri bildirimlerine dayalı dinamik istatistiklerin gösterilmesi / Displaying dynamic statistics based on user feedback
- Bileşen modülerleştirme / Component modularization
- Daha iyi sunum için tablo tabanlı düzen / Table-based layout for better presentation

The `unicafe` application collects user feedback and provides statistics. Features include:
- Managing state with `useState`
- Handling user interactions
- Displaying dynamic statistics based on user feedback
- Component modularization
- Table-based layout for better presentation

#### Projeyi Çalıştırma / Running the Project:
1. Dizine gidin / Navigate to the directory:
   ```bash
   cd part1/unicafe
   ```
2. Bağımlılıkları yükleyin / Install dependencies:
   ```bash
   npm install
   ```
3. Uygulamayı başlatın / Start the application:
   ```bash
   npm start
   ```

---

### **3. Anecdotes**
**Egzersizler 1.12 - 1.14 / Exercises 1.12 - 1.14**

`anecdotes` uygulaması, rastgele anekdotlar gösterir ve kullanıcıların favorilerini oylamasına olanak tanır. Özellikler şunları içerir:
- Anekdotlar ve oylar için state yönetimi / Managing state for anecdotes and votes
- Anekdotlar için rastgele sayılar üretilmesi / Generating random numbers for anecdotes
- En çok oy alan anekdotun belirlenmesi ve gösterilmesi / Identifying and displaying the most-voted anecdote

The `anecdotes` application displays random anecdotes and allows users to vote for their favorites. Features include:
- Managing state for anecdotes and votes
- Generating random numbers for anecdotes
- Identifying and displaying the most-voted anecdote

#### Projeyi Çalıştırma / Running the Project:
1. Dizine gidin / Navigate to the directory:
   ```bash
   cd part1/anecdotes
   ```
2. Bağımlılıkları yükleyin / Install dependencies:
   ```bash
   npm install
   ```
3. Uygulamayı başlatın / Start the application:
   ```bash
   npm start
   ```

---

## Notlar / Notes
- Node.js sürümünüzün 14 veya üzeri olduğundan emin olun. / Ensure that you are running Node.js version 14 or above.
- Her uygulama bağımsız olarak çalışır ve kendi `package.json` dosyasına sahiptir. / Each application runs independently and has its own `package.json` file.
- Tüm çözümler, en iyi uygulamalara ve ESLint kurallarına uygun olarak hazırlanmıştır. / All solutions adhere to best practices and ESLint rules.

Herhangi bir sorun veya soru için benimle iletişime geçmekten veya GitHub deposunda bir sorun açmaktan çekinmeyin! / For any issues or questions, feel free to contact me or open an issue in the GitHub repository!
