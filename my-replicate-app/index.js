import Replicate from "replicate";
import dotenv from "dotenv";
import readline from "readline";
dotenv.config();

const replicate = new Replicate({
  auth: process.env.REPLICATE_API_TOKEN,
  userAgent: "https://www.npmjs.com/package/create-replicate",
});

const model = "ibm-granite/granite-3.3-8b-instruct";

// Setup readline interface untuk input user
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// System prompt untuk DefinIT
const systemPrompt = `Kamu adalah DefinIT, chatbot asisten untuk mahasiswa dan pekerja IT. 

TUGAS UTAMA:
- Menerjemahkan istilah IT dari bahasa Inggris ke bahasa Indonesia
- Memberikan penjelasan ringkas dalam konteks IT
- Memberikan contoh penggunaan yang praktis

FORMAT JAWABAN:
1. Terjemahan: "[terjemahan dalam bahasa Indonesia]"
2. Konteks IT: "[penjelasan singkat dalam konteks teknologi]"
3. Contoh penggunaan: "[contoh praktis penggunaan istilah]"

GAYA KOMUNIKASI:
- Ramah dan mudah dipahami
- Fokus pada konteks IT/teknologi
- Berikan jawaban yang praktis dan aplikatif
- Jika istilah sudah umum dalam bahasa Indonesia, jelaskan saja tanpa menerjemahkan

Jawab dalam bahasa Indonesia dengan format yang konsisten.`;

console.log("🤖 DefinIT Bot - Asisten Terjemahan Istilah IT");
console.log("=".repeat(50));
console.log("Halo! Saya DefinIT, siap membantu menjelaskan istilah IT.");
console.log("Ketik 'quit' atau 'exit' untuk keluar.\n");

// Fungsi untuk mendapatkan respons dari AI
async function getAIResponse(userMessage) {
  try {
    const input = {
      messages: [
        {
          role: "system",
          content: systemPrompt,
        },
        {
          role: "user",
          content: userMessage,
        },
      ],
      max_tokens: 500,
      temperature: 0.7,
    };

    console.log("🔄 Sedang memproses...");
    const output = await replicate.run(model, { input });
    return output.join("");
  } catch (error) {
    console.error("❌ Error:", error.message);
    return "Maaf, terjadi kesalahan saat memproses permintaan Anda.";
  }
}

// Fungsi utama chat loop
async function startChat() {
  rl.question("👤 Anda: ", async (userInput) => {
    if (
      userInput.toLowerCase() === "quit" ||
      userInput.toLowerCase() === "exit"
    ) {
      console.log("👋 Terima kasih telah menggunakan DefinIT! Sampai jumpa!");
      rl.close();
      return;
    }

    if (userInput.trim() === "") {
      console.log("💡 Silakan masukkan istilah IT yang ingin dijelaskan.");
      startChat();
      return;
    }

    const response = await getAIResponse(userInput);
    console.log("\n🤖 DefinIT:", response);
    console.log("\n" + "─".repeat(50));

    // Lanjutkan chat
    startChat();
  });
}

// Mulai chat
startChat();
