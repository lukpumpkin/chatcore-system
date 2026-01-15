import { ChatCore } from "./core/ChatCore.js";

const chat = new ChatCore();

const conversation = [
  { userId: "user1", message: "meu nome é luk" },
  { userId: "user2", message: "oi" },
  { userId: "user1", message: "oi" },
  { userId: "user2", message: "meu nome é ana" },
  { userId: "user2", message: "oi" }
];

for (const { userId, message } of conversation) {
  const response = chat.handleMessage(userId, message);
  console.log(`${userId}: ${message}`);
  console.log(`bot: ${response}`);
}
