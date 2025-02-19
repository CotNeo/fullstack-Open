# Notes Application - README

## 🌟 Overview
This document describes the sequence of events when using the Notes application hosted on [studies.cs.helsinki.fi](https://studies.cs.helsinki.fi). The application allows users to view, add, and save notes, either in a traditional server-rendered manner or as a Single Page Application (SPA).

📌 **This README is prepared for Part 0 of the Full Stack Open course.**

## 📜 Traditional Server-Rendered Workflow
1. **🟢 User opens the page:**
   - The browser requests the main HTML document from the server.
   - The server responds with the requested HTML document.

2. **🎨 Loading Styles and Scripts:**
   - The browser fetches `main.css` and `main.js` from the server.

3. **📥 Fetching Existing Notes:**
   - The browser makes a request to `data.json` to retrieve existing notes.
   - The server responds with a JSON array containing previously saved notes.
   - The browser then renders these notes on the page.

4. **✍️ User Adds a Note:**
   - The user writes a note in the input field and submits it.
   - The browser sends a `POST` request to save the new note.
   - The server responds with an HTTP 302 redirect to `/notes`, prompting the browser to reload the updated notes.
   - The browser fetches the latest data and renders the new note.

## 🚀 Single Page Application (SPA) Workflow
1. **🌍 User Navigates to SPA:**
   - The browser requests the SPA-specific HTML document from the server.
   - The server responds with the HTML page.

2. **🎨 Loading Styles and Scripts:**
   - The browser loads `main.css` and `spa.js`.

3. **📥 Fetching Notes in SPA Mode:**
   - JavaScript fetches `data.json` and updates the page dynamically without a full reload.

4. **📝 User Adds a Note in SPA Mode:**
   - The user writes a note and clicks the "Save" button.
   - A `POST` request is sent to `new_note_spa`.
   - The server responds with HTTP 201 Created.
   - JavaScript updates the page dynamically without reloading.

---

# 📖 Notes Uygulaması - README (Türkçe)

## 🌟 Genel Bakış
Bu doküman, [studies.cs.helsinki.fi](https://studies.cs.helsinki.fi) üzerinde barındırılan Notlar uygulamasının işleyişini açıklar. Uygulama, kullanıcıların notları görüntülemesine, eklemesine ve kaydetmesine olanak tanır. Hem geleneksel sunucu taraflı işleyiş hem de Tek Sayfa Uygulaması (SPA) olarak kullanılabilir.

📌 **Bu README, Full Stack Open kursunun Part 0 bölümü için hazırlanmıştır.**

## 📜 Geleneksel Sunucu Taraflı İşleyiş
1. **🟢 Kullanıcı sayfayı açar:**
   - Tarayıcı, ana HTML belgesini sunucudan talep eder.
   - Sunucu, HTML belgesini döner.

2. **🎨 CSS ve JavaScript dosyalarının yüklenmesi:**
   - Tarayıcı, `main.css` ve `main.js` dosyalarını sunucudan alır.

3. **📥 Mevcut Notların Getirilmesi:**
   - Tarayıcı, `data.json` dosyasını talep eder.
   - Sunucu, daha önce kaydedilmiş notların bulunduğu JSON dizisini döner.
   - Tarayıcı, notları ekrana çizer.

4. **✍️ Kullanıcı Not Ekler:**
   - Kullanıcı bir not yazar ve gönderir.
   - Tarayıcı, yeni notu kaydetmek için `POST` isteği gönderir.
   - Sunucu, HTTP 302 yönlendirmesi ile yanıt verir ve tarayıcı sayfayı yeniden yükleyerek güncellenmiş notları gösterir.

## 🚀 Tek Sayfa Uygulaması (SPA) İşleyişi
1. **🌍 Kullanıcı SPA'ya Gider:**
   - Tarayıcı, SPA için özel olarak tasarlanmış HTML belgesini sunucudan talep eder.
   - Sunucu, HTML sayfasını döner.

2. **🎨 CSS ve JavaScript Dosyalarının Yüklenmesi:**
   - Tarayıcı, `main.css` ve `spa.js` dosyalarını yükler.

3. **📥 SPA Modunda Notların Getirilmesi:**
   - JavaScript, `data.json` dosyasını talep eder ve sayfayı dinamik olarak günceller.

4. **📝 SPA Modunda Not Eklenmesi:**
   - Kullanıcı bir not yazar ve "Kaydet" butonuna basar.
   - `new_note_spa` adresine `POST` isteği gönderilir.
   - Sunucu, HTTP 201 Created ile yanıt verir.
   - JavaScript, sayfayı yeniden yüklemeden günceller.

---
Bu doküman, uygulamanın işleyişini ve HTTP isteklerinin akışını açıklamaktadır. 🎯

