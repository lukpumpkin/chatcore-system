import { ChatCore } from "./core/ChatCore.js";
import { TerminalAdapter } from "./adapters/TerminalAdapter.js";

const chatCore = new ChatCore();
const terminal = new TerminalAdapter(chatCore);

// simulação de mensagens
terminal.send("user1", "oi");
terminal.send("user1", "help");
terminal.send("user1", "vendas");
terminal.send("user1", "xyz");



