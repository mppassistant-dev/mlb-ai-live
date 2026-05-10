import axios from "axios";

export default async function handler(req, res) {
  try {
    const { question } = req.body;

    res.json({
      reply: "AI endpoint working. Connect OpenAI key to enable full responses.",
      question
    });
  } catch (e) {
    res.status(500).json({ error: "failed" });
  }
}
