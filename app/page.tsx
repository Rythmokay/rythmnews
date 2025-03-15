import { Suspense } from 'react';
import { fetchNews } from './lib/api';
import { NewsArticle } from './types/news';
import NewsCard from './components/NewsCard';
import Navbar from '../components/ui/Navbar';  // Import Navbar here
import { Newspaper } from 'lucide-react';

// NewsContent Component to display articles based on category
async function NewsContent({
  category,
}: {
  category: string;
}) {
  const response = await fetchNews(category);
  const articles = response.articles;

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map((article: NewsArticle, index: number) => (
          <NewsCard
            key={`${article.title}-${index}`}
            article={article}
            isShort={false}
          />
        ))}
      </div>
    </div>
  );
}

// Main Home Component
export default async function Home() {
  return (
    <main className="min-h-screen bg-background">
      {/* Navbar is now part of the layout */}
      <Navbar /> {/* Navbar added here */}

      {/* The header section with the NewsFlash branding
      <header className="border-b">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <Newspaper className="h-8 w-8" />
              <h1 className="text-2xl font-bold">NewsFlash</h1>
            </div>
          </div>
        </div>
      </header> */}

      {/* Suspense fallback for loading state */}
      <Suspense
        fallback={
          <div className="container mx-auto px-4 py-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="h-[400px] bg-muted animate-pulse rounded-lg" />
              ))}
            </div>
          </div>
        }
      >
        {/* Rendering the news articles from the "general" category */}
        <NewsContent category="general" />
      </Suspense>
    </main>
  );
}
