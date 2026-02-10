const getImageUrl = (query) => {
  const encodedQuery = encodeURIComponent(query);
  return `https://image.pollinations.ai/prompt/${encodedQuery}?width=1080&height=720&nologo=true`;
};

export { getImageUrl };
