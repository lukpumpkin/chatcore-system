import { ChatCore } from "./core/ChatCore.js";
import { TerminalAdapter } from "./adapters/TerminalAdapter.js";

const chatCore = new ChatCore();
const terminal = new TerminalAdapter(chatCore);

// simulação de mensagens
terminal.send("user1", "oi");
terminal.send("user1", "ajuda");
terminal.send("user1", "tchau");
terminal.send("user1", "xyz");
