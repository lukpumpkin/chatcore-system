import { responses } from "../config/responses.js";

export function simpleFlow(text) {
  if (responses.greetings.includes(text)) {
    return responses.messages.greeting;
  }

  if (responses.farewell.includes(text)) {
    return responses.messages.farewell;
  }

  if (responses.help.includes(text)) {
    return responses.messages.help;
  }

  return responses.messages.fallback;
}
