import Replicate from "replicate";

// Initialize Replicate
const replicate = new Replicate({
  auth: process.env.REPLICATE_API_TOKEN,
  userAgent: "definit-chatbot",
});

const model = "ibm-granite/granite-3.3-8b-instruct";

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

export default async function handler(req, res) {
  // Set CORS headers
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  // Handle preflight requests
  if (req.method === "OPTIONS") {
    res.status(200).end();
    return;
  }

  // Only allow POST requests
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { message } = req.body;

    if (!message || message.trim() === "") {
      return res.status(400).json({ error: "Message is required" });
    }

    if (!process.env.REPLICATE_API_TOKEN) {
      return res
        .status(500)
        .json({ error: "Replicate API token not configured" });
    }

    const input = {
      messages: [
        {
          role: "system",
          content: systemPrompt,
        },
        {
          role: "user",
          content: message,
        },
      ],
      max_tokens: 500,
      temperature: 0.7,
    };

    console.log("Processing request for:", message);

    const output = await replicate.run(model, { input });
    const response = Array.isArray(output) ? output.join("") : output;

    res.status(200).json({
      success: true,
      response: response,
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    console.error("Error processing request:", error);
    res.status(500).json({
      success: false,
      error: "Failed to process your request. Please try again.",
      details: error.message,
    });
  }
}
