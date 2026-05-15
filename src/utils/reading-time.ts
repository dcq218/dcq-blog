export function estimateReadingTime(text: string) {
  const cjkCharacters = text.match(/[\u3400-\u9fff]/g)?.length ?? 0;
  const latinWords = text
    .replace(/[\u3400-\u9fff]/g, " ")
    .trim()
    .split(/\s+/)
    .filter(Boolean).length;

  const minutes = cjkCharacters / 500 + latinWords / 220;
  return Math.max(1, Math.ceil(minutes));
}
