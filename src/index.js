import { ChatCore } from "./core/ChatCore.js";

const chat = new ChatCore();

console.log("ChatCoreSystem iniciado ");

const userMessage = "ajuda";
const botResponse = chat.handleMessage(userMessage);

console.log("user:", userMessage);
console.log("bot:", botResponse);
