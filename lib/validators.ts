export function assertSafeUserInput(input: unknown): string {
  if (typeof input !== "string") throw new Error("Invalid input.");
  const trimmed = input.trim();
  if (trimmed.length < 2) throw new Error("Please write a little more.");
  if (trimmed.length > 1200) throw new Error("Please shorten your question.");
  return trimmed;
}
