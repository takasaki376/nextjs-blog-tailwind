import { SearchIcon } from "@heroicons/react/outline";
import type { VFC } from "react";
import { InputText } from "src/components/shared/InputText";

export const HomeHeader: VFC = () => {
  return (
    <div className="flex w-full border-b border-gray-300">
      <div className="w-52" />
      {/* ◆◆ 検索テキストボックス ◆◆ */}
      <div className="items-center my-auto mr-auto">
        <InputText
          className="mx-auto w-[520px]"
          placeholder="検索"
          startIcon={<SearchIcon className="my-auto mr-2 w-6 h-6" />}
        />
      </div>
    </div>
  );
};
