// const getImageUrl = (query) => {
//   const encodedQuery = encodeURIComponent(query);
//   return `https://image.pollinations.ai/prompt/${encodedQuery}?width=1080&height=720&nologo=true`;
// };

// export { getImageUrl };

export const getImageUrl = (query) => {
  if (!query) return "/placeholder.jpg"; // ডিফল্ট ইমেজ পাথ

  // স্পেস থাকলে কমা দিয়ে রিপ্লেস করা ভালো (যেমন: 'Bangkok,Thailand')
  const formattedQuery = encodeURIComponent(query.trim());

  // সাইজ (800x600) এবং কিউওয়ার্ড দিয়ে ডাইনামিক লিঙ্ক
  return `https://loremflickr.com/800/600/${formattedQuery},travel/all`;
};
