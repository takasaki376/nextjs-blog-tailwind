import type { VFC } from "react";
import { useState } from "react";
import { TagButton } from "src/components/shared/TagButton";
import { TAG_DATA } from "src/data";

export const TagBoard: VFC = () => {
  const [tags] = useState(TAG_DATA);

  // タグの表示
  const tagRender = () => {
    const result = tags
      .filter((tag) => tag.count > 0)
      .map((tag, id) => {
        // タグをクリックした際のフィルタ処理を記述する
        const handleButtonClick = () => {
          return null;
        };
        return (
          <TagButton key={id} onClick={handleButtonClick} className="px-2 py-1">
            {`${tag.tagItem} (${tag.count})`}
          </TagButton>
        );
      });
    return result;
  };

  return (
    <div className="flex flex-col h-1/3">
      <h3 className="mr-4 whitespace-nowrap text-lg">
        <strong>タグ</strong>
      </h3>
      <div>{tagRender()}</div>
    </div>
  );
};
