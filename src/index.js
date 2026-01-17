import { ChatCore } from "./core/ChatCore.js";
import { TerminalAdapter } from "./adapters/TerminalAdapter.js";

const chatCore = new ChatCore();
const terminal = new TerminalAdapter(chatCore);

terminal.send("user1", "quero marca uma consulta");




