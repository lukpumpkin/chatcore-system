import fs from "fs";

export class AIService {
  static getKnowledge() {
    return fs.readFileSync("src/knowledge/base.txt", "utf8");
  }

  static async ask(question) {
    const knowledge = this.getKnowledge();

    const prompt = `
Você é uma IA especialista com a seguinte base de conhecimento:

${knowledge}

Responda de forma profissional, educada e direta.

Pergunta do usuário: ${question}
`;

    const response = await fetch("http://localhost:11434/api/generate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        model: "llama3",
        prompt,
        stream: false
      })
    });

    const data = await response.json();
    return data.response;
  }
}
