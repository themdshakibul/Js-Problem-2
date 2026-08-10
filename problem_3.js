function countHashtags(caption) {
  if (typeof caption !== "string") {
    return "Invalid";
  }
  const words = caption.split(" ");
  let hashtagCount = 0;
  let longestTag = "";
  for (const word of words) {
    if (word.startsWith("#") && word.length > 1) {
      hashtagCount++;
      const tag = word.slice(1);
      if (tag.length > longestTag.length) {
        longestTag = tag;
      }
    }
  }
  return { hashtagCount, longestTag };
}
