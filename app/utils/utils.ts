export function truncateWords(word: string, limit: number) {
  if (word.length <= limit) return word;

  if (word.length > limit) {
    return word.slice(0, limit) + "...";
  }
}
