const API_KEY = process.env.NEXT_PUBLIC_NEWS_API_KEY;
const BASE_URL = 'https://newsapi.org/v2';

export async function fetchNews(category: string = 'general', page: number = 1) {
  try {
    const headers: HeadersInit = {};
    
    if (API_KEY) {
      headers['X-Api-Key'] = API_KEY;
    }
    
    const response = await fetch(
      `${BASE_URL}/top-headlines?country=us&category=${category}&page=${page}&apiKey=${API_KEY}`,
      {
        cache: 'no-store',
        headers
      }
    );
   
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Failed to fetch news');
    }
   
    return await response.json();
  } catch (error) {
    console.error('Error fetching news:', error);
    throw error;
  }
}

export async function searchNews(query: string, page: number = 1) {
  try {
    const headers: HeadersInit = {};
    
    if (API_KEY) {
      headers['X-Api-Key'] = API_KEY;
    }
    
    const response = await fetch(
      `${BASE_URL}/everything?q=${query}&page=${page}&apiKey=${API_KEY}`,
      {
        cache: 'no-store',
        headers
      }
    );
   
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Failed to search news');
    }
   
    return await response.json();
  } catch (error) {
    console.error('Error searching news:', error);
    throw error;
  }
}