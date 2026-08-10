function bonusScore(scores) {
  if (!Array.isArray(scores) || scores.length === 0) {
    return "Invalid";
  }
  for (const score of scores) {
    if (typeof score !== "number" || Number.isNaN(score)) {
      return "Invalid";
    }
  }
  return scores.map((s) => s + 10).reduce((sum, s) => sum + s, 0);
}
