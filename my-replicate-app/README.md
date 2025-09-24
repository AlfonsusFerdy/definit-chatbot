# 🤖 DefinIT - Chatbot Asisten Istilah IT

DefinIT adalah chatbot pintar yang dirancang khusus untuk membantu mahasiswa dan pekerja IT memahami istilah-istilah teknologi dalam bahasa Indonesia.

## ✨ Fitur Utama

- **Terjemahan Istilah IT**: Menerjemahkan istilah teknis dari bahasa Inggris ke bahasa Indonesia
- **Penjelasan Kontekstual**: Memberikan penjelasan singkat dalam konteks teknologi
- **Contoh Praktis**: Menyediakan contoh penggunaan yang mudah dipahami
- **Interface Chat Interaktif**: Web-based chat dengan AI yang responsif
- **Deploy Ready**: Siap deploy ke Vercel

## 🚀 Deploy ke Vercel

### Quick Deploy

1. **Install Vercel CLI:**

   ```bash
   npm install -g vercel
   ```

2. **Login & Deploy:**

   ```bash
   vercel login
   vercel
   ```

3. **Set Environment Variable:**

   ```bash
   vercel env add REPLICATE_API_TOKEN
   ```

   Masukkan API token dari [replicate.com/account/api-tokens](https://replicate.com/account/api-tokens)

4. **Deploy Production:**
   ```bash
   vercel --prod
   ```

### Development Lokal

```bash
npm install
npm run dev
```

## 🔧 Teknologi

- **Frontend**: HTML, CSS, JavaScript
- **Backend**: Vercel Serverless Functions
- **AI**: IBM Granite 3.3-8B via Replicate API
