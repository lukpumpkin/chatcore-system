export class MemoryStore {
  constructor() {
    this.sessions = {};
  }

  get(userId) {
    if (!this.sessions[userId]) {
      this.sessions[userId] = { state: "default" };
    }
    return this.sessions[userId];
  }

  set(userId, data) {
    this.sessions[userId] = { ...this.sessions[userId], ...data };
  }
}