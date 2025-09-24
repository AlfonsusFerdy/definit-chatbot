# 🤖 DefinIT - Chatbot Asisten Istilah IT

DefinIT adalah chatbot pintar yang dirancang khusus untuk membantu mahasiswa dan pekerja IT memahami istilah-istilah teknologi dalam bahasa Indonesia.

## ✨ Fitur Utama

- **Terjemahan Istilah IT**: Menerjemahkan istilah teknis dari bahasa Inggris ke bahasa Indonesia
- **Penjelasan Kontekstual**: Memberikan penjelasan singkat dalam konteks teknologi
- **Contoh Praktis**: Menyediakan contoh penggunaan yang mudah dipahami
- **Interface Chat Interaktif**: Chat real-time dengan AI yang responsif

## 💬 Contoh Percakapan

```
👤 Anda: Translate network throughput ke bahasa Indonesia

🤖 DefinIT:
Terjemahan: "Laju jaringan"

Konteks IT: "Network throughput adalah jumlah data yang berhasil ditransmisikan melalui jaringan dalam periode tertentu."

Contoh penggunaan: "Wi-Fi di kantor memiliki throughput 100 Mbps."
```

## 🚀 Cara Menjalankan

### Prasyarat

- Node.js 18 atau lebih baru
- Akun Replicate dengan API token

### Instalasi

1. **Clone atau download project ini**

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Setup API Token:**

   - Buka [replicate.com/account/api-tokens](https://replicate.com/account/api-tokens)
   - Buat API token baru
   - Edit file `.env` dan masukkan token Anda:
     ```
     REPLICATE_API_TOKEN=your_actual_token_here
     ```

4. **Jalankan DefinIT:**
   ```bash
   npm start
   ```

## 🎯 Target Pengguna

- **Mahasiswa IT**: Memahami istilah teknis dalam perkuliahan
- **pekerja IT**: Reference cepat untuk istilah dalam pekerjaan sehari-hari
- **Pemula Teknologi**: Belajar terminologi IT dengan mudah

## 📝 Cara Menggunakan

1. Jalankan aplikasi dengan `npm start`
2. Ketik istilah IT yang ingin dijelaskan
3. DefinIT akan memberikan:
   - Terjemahan ke bahasa Indonesia
   - Penjelasan dalam konteks IT
   - Contoh penggunaan praktis
4. Ketik `quit` atau `exit` untuk keluar

## 🔧 Teknologi yang Digunakan

- **Node.js**: Runtime JavaScript
- **Replicate API**: Platform AI untuk menjalankan model
- **IBM Granite 3.3-8B**: Model AI untuk pemrosesan bahasa
- **dotenv**: Manajemen environment variables

## 📄 Lisensi

Project ini dibuat untuk keperluan edukasi dan pengembangan kemampuan IT.
