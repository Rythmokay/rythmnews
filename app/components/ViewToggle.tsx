'use client';

import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Grid2X2, Rows } from "lucide-react";

interface ViewToggleProps {
  view: 'grid' | 'shorts';
  onViewChange: (view: 'grid' | 'shorts') => void;
}

export default function ViewToggle({ view, onViewChange }: ViewToggleProps) {
  return (
    <ToggleGroup type="single" value={view} onValueChange={(value) => value && onViewChange(value as 'grid' | 'shorts')}>
      <ToggleGroupItem value="grid" aria-label="Grid view">
        <Grid2X2 className="h-4 w-4" />
      </ToggleGroupItem>
      <ToggleGroupItem value="shorts" aria-label="Shorts view">
        <Rows className="h-4 w-4" />
      </ToggleGroupItem>
    </ToggleGroup>
  );
}