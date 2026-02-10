function generateSlug(userPrompt) {
  let str = userPrompt.toLowerCase();

  const dayMatch = str.match(/\d+/);
  const days = dayMatch ? dayMatch[0] : "x";

  let destination = str
    .replace(/\d+/g, "")
    .replace(/days|day|tour|plan|for|to|visit|in/g, "")
    .trim()
    .replace(/\s+/g, "-");

  return `${days}-days-${destination}`;
}

export default generateSlug;
