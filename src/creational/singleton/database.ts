export class Database {
  static instance: Database;

  static getInstance(): Database {
    if (this.instance === null) {
      this.instance = new Database();
    }

    return this.instance;
  }
}
