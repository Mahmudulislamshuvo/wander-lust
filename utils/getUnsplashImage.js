export const getUnsplashImage = async (query) => {
  const accessKey = process.env.UNSPLASH_ACCESS_KEY;

  if (!query || !accessKey) return null;

  try {
    const url = `https://api.unsplash.com/search/photos?page=1&query=${encodeURIComponent(query)}&client_id=${accessKey}&per_page=1&orientation=landscape`;

    const res = await fetch(url);
    const data = await res.json();

    if (data.results && data.results.length > 0) {
      return data.results[0].urls.regular;
    }

    return null;
  } catch (error) {
    console.error("Unsplash Fetch Error:", error);
    return null;
  }
};
