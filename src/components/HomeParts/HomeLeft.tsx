import type { Dispatch, ReactNode, SetStateAction, VFC } from "react";
import { useState } from "react";
import { Accordion } from "src/components/shared/Accordion";
import { TagButton } from "src/components/shared/TagButton";
import { FOLDER1_DATA, FOLDER2_DATA, TAG_DATA } from "src/data";

type AccordionType = {
  id: string;
  name: string;
  selected: string;
  setSelFolder: Dispatch<SetStateAction<string>>;
  children?: ReactNode;
  childFolder: boolean;
};
const RenderAccordion: VFC<AccordionType> = (props) => {
  const handleSetFolder = () => {
    props.setSelFolder(props.id);
  };
  return (
    <Accordion
      id={props.id}
      selected={props.selected}
      onClick={handleSetFolder}
      label={props.name}
      childAccordion={props.childFolder}
    >
      {props.children}
    </Accordion>
  );
};

export const HomeLeft: VFC = () => {
  const [tags] = useState(TAG_DATA);
  const [folder1List] = useState(FOLDER1_DATA);
  const [folder2List] = useState(FOLDER2_DATA);
  const [selFolder, setSelFolder] = useState<string>(
    `${folder1List[0].id}` ?? "0"
  );

  // フォルダ２の表示
  const forder2Render = (propsIndex: number) => {
    const result = folder2List
      .filter((forder2) => {
        return forder2.index1 === propsIndex;
      })
      .sort((a, b) => {
        if (a.index < b.index) return -1;
        if (a.index > b.index) return 1;
        return 0;
      })
      .map((forder2) => {
        return (
          <RenderAccordion
            id={`2-${forder2.index1}-${forder2.index}`}
            key={`${forder2.id}`}
            selected={selFolder}
            name={forder2.folderName}
            setSelFolder={setSelFolder}
            childFolder={false}
          />
        );
      });
    return result;
  };

  // フォルダ１の表示
  const forder1Render = () => {
    const result = folder1List
      .sort((a, b) => {
        if (a.index < b.index) return -1;
        if (a.index > b.index) return 1;
        return 0;
      })
      .map((forder1) => {
        return (
          <RenderAccordion
            id={`2-${forder1.index}`}
            key={`${forder1.id}`}
            selected={selFolder}
            name={forder1.folderName}
            setSelFolder={setSelFolder}
            childFolder={
              folder2List.filter((forder2) => {
                return forder2.index1 === forder1.index;
              }).length === 0
                ? false
                : true
            }
          >
            {forder2Render(forder1.index)}
          </RenderAccordion>
        );
      });
    return result;
  };
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
          <TagButton key={id} onClick={handleButtonClick} className="py-1 px-2">
            {`${tag.tagItem} (${tag.count})`}
          </TagButton>
        );
      });
    return result;
  };
  return (
    <div className="ml-2 h-full border-r-2 border-gray-300">
      <div className="flex flex-col h-2/5">
        <h3 className="mr-4 text-lg whitespace-nowrap">
          <strong>タグ</strong>
        </h3>
        <div>
          <div>{tagRender()}</div>
        </div>
      </div>
      <div className="flex flex-col h-3/5">
        <h3 className="mr-4 text-lg whitespace-nowrap">
          <strong>カテゴリ</strong>
        </h3>
        <div>
          <div className="flex flex-col h-auto">{forder1Render()}</div>
        </div>
      </div>
    </div>
  );
};
