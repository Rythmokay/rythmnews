'use client';

import { Button } from "@/components/ui/button";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

const categories = [
  'general',
  'business',
  'technology',
  'entertainment',
  'health',
  'science',
  'sports',
];

interface CategoryNavProps {
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

export default function CategoryNav({ activeCategory, onCategoryChange }: CategoryNavProps) {
  return (
    <ScrollArea className="w-full whitespace-nowrap">
      <div className="flex space-x-2 p-4">
        {categories.map((category) => (
          <Button
            key={category}
            variant={activeCategory === category ? "default" : "outline"}
            onClick={() => onCategoryChange(category)}
            className="capitalize"
          >
            {category}
          </Button>
        ))}
      </div>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  );
}