import { simpleFlow } from "../flows/simpleFlow.js";

export class ChatCore {
  handleMessage(text) {
    return simpleFlow(text.toLowerCase().trim());
  }
}




