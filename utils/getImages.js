// অথবা সরাসরি <img> ট্যাগে
const getImageUrl = (query) => {
  const encodedQuery = encodeURIComponent(query);
  return `https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&keywords=${encodedQuery}`;
};

export { getImageUrl };
