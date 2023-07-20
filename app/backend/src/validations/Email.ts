export default class Email {
  private static regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  public static isValid(email: string): boolean {
    return this.regex.test(email);
  }
}
