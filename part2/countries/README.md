Countries Data Viewer

English

Overview

This project is a React-based web application that allows users to search for and view information about different countries using the REST API from RestCountries. Additionally, it fetches real-time weather data for each country's capital using OpenWeatherMap.

Features

Country Search: Users can search for countries by name.

Filtered Results:

If more than 10 matches are found, a message prompts the user to refine the query.

If the query results in 10 or fewer but more than one match, a list of countries is displayed.

If only one country matches, detailed information is shown (flag, capital, area, languages).

Country Details Button: A "Show" button is available next to each country in the list to display detailed information.

Weather Data: Fetches real-time weather data for the selected country's capital.

Technologies Used

React.js

Vite.js

Axios (for API requests)

OpenWeatherMap API

RestCountries API

Installation & Setup

Clone the repository:

git clone https://github.com/CotNeo/fullstack-Open.git

Navigate to the project directory:

cd fullstack-Open/Part2/countries

Install dependencies:

npm install

Set up environment variables for the weather API key:

$env:VITE_WEATHER_API_KEY="your_api_key" -and (npm run dev) # Windows PowerShell
export VITE_WEATHER_API_KEY=your_api_key && npm run dev  # Linux/macOS

Run the development server:

npm run dev

Notes

Ensure you obtain an API key from OpenWeatherMap before running the application.

Do not hardcode API keys in the source code. Use environment variables instead.

Türkçe

Genel Bakış

Bu proje, kullanıcının RestCountries API'sini kullanarak ülkeler hakkında bilgi almasını sağlayan React tabanlı bir web uygulamasıdır. Ayrıca, OpenWeatherMap API’sinden alınan verilerle her ülkenin başkentinin hava durumunu da görüntüler.

Özellikler

Ülke Arama: Kullanıcı, ülke isimlerine göre arama yapabilir.

Filtrelenmiş Sonuçlar:

10’dan fazla eşleşme varsa, kullanıcıdan daha spesifik bir arama yapması istenir.

10 veya daha az (ama birden fazla) eşleşme varsa, eşleşen ülkelerin bir listesi görüntülenir.

Tek bir ülke eşleşirse, detaylı bilgiler (bayrak, başkent, yüz ölçümü, konuşulan diller) gösterilir.

Ülke Detayları Butonu: Ülke listesindeki her ülkenin yanında bir "Göster" butonu bulunur ve tıklanınca detaylar görüntülenir.

Hava Durumu Bilgisi: Seçilen ülkenin başkentinin gerçek zamanlı hava durumu verilerini çeker.

Kullanılan Teknolojiler

React.js

Vite.js

Axios (API istekleri için)

OpenWeatherMap API

RestCountries API

Kurulum & Çalıştırma

Depoyu klonlayın:

git clone https://github.com/CotNeo/fullstack-Open.git

Proje dizinine gidin:

cd fullstack-Open/Part2/countries

Gerekli bağımlılıkları yükleyin:

npm install

Hava durumu API anahtarınızı ortam değişkeni olarak ayarlayın:

$env:VITE_WEATHER_API_KEY="your_api_key" -and (npm run dev) # Windows PowerShell
export VITE_WEATHER_API_KEY=your_api_key && npm run dev  # Linux/macOS

Geliştirme sunucusunu çalıştırın:

npm run dev

Notlar

OpenWeatherMap üzerinden bir API anahtarı almanız gerekmektedir.

API anahtarlarını kaynak koduna doğrudan yazmayın, ortam değişkenleri kullanarak saklayın.

Bu proje, Helsinki Üniversitesi Full Stack Open kursunun 2.18, 2.19 ve 2.20 bölümleri kapsamında geliştirilmiştir.