import axios from "axios";

export class OllamaAdapter {
  async ask(prompt) {
    const res = await axios.post("http://localhost:11434/api/generate", {
      model: "mistral",
      prompt: prompt,
      stream: false
    });

    return res.data.response;
  }
}
