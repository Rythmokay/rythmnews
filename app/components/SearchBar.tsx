'use client';

import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useState } from "react";

interface SearchBarProps {
  onSearch: (query: string) => void;
}

export default function SearchBar({ onSearch }: SearchBarProps) {
  const [query, setQuery] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      onSearch(query.trim());
    }
  };

  return (
    <form onSubmit={handleSubmit} className="relative w-full max-w-lg mx-auto">
      <Input
        type="text"
        placeholder="Search news..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="pl-10"
      />
      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
    </form>
  );
}