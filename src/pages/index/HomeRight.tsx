import type { VFC } from "react";
import { CategoryBoard } from "src/components/parts/CategoryBoard";
import { TagBoard } from "src/components/parts/TagBoard";

export const HomeRight: VFC = () => {
  return (
    <div className="ml-2 h-full border-r-2 border-gray-300 overflow-y-auto">
      <TagBoard />
      <CategoryBoard />
    </div>
  );
};
