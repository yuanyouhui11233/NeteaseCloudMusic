class LocalStorageService {
  private storage: Storage;
  constructor() {
    this.storage = localStorage;
  }
  public setItem(key: string, value: any): void {
    this.storage.setItem(key, JSON.stringify(value));
  }
  public clear() {
    this.storage.clear();
  }
  public removeItem(key: string): void {
    this.storage.removeItem(key);
  }
  public getItem<T>(key: string): T | null {
    const value = this.storage.getItem(key);
    if (value) {
      return JSON.parse(value) as T;
    }
    return null;
  }
}
export default new LocalStorageService();
