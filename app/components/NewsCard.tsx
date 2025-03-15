'use client';

import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { NewsArticle } from "../types/news";
import Image from "next/image";
import { format } from "date-fns";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

interface NewsCardProps {
  article: NewsArticle;
  isShort?: boolean;
}

export default function NewsCard({ article, isShort = false }: NewsCardProps) {
  return (
    <Card className="h-full flex flex-col">
      <CardHeader className="p-0">
        <div className="relative w-full h-48">
          <Image
            src={article.urlToImage || 'https://images.unsplash.com/photo-1585829365295-ab7cd400c167?w=800'}
            alt={article.title}
            fill
            className="object-cover rounded-t-lg"
          />
        </div>
      </CardHeader>
      <CardContent className="flex-grow p-4">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm text-muted-foreground">
            {article.source.name}
          </span>
          <span className="text-sm text-muted-foreground">
            {format(new Date(article.publishedAt), 'MMM dd, yyyy')}
          </span>
        </div>
        <h3 className="text-lg font-semibold mb-2 line-clamp-2">{article.title}</h3>
        {!isShort && (
          <p className="text-muted-foreground line-clamp-3">{article.description}</p>
        )}
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button asChild className="w-full">
          <a href={article.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
            Read More <ExternalLink size={16} />
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
}