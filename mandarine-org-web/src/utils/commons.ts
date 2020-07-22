export class CommonsUtils {
  public static sanitizeTitles(text: string) {
    return text.toLowerCase().replace(/[^\w]+/g, '-');
  }
}
