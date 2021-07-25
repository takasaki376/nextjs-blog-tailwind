import type { Dispatch, ReactNode, SetStateAction, VFC } from "react";
import { useCallback } from "react";
import { useState } from "react";
import { Accordion } from "src/components/shared/Accordion";
import { FOLDER1_DATA, FOLDER2_DATA } from "src/data";

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

  // const handleSetFolder = useCallback(() => {
  //   props.setSelFolder(props.id);
  // }, [props]);

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

export const CategoryBoard: VFC = () => {
  const [folder1List] = useState(FOLDER1_DATA);
  const [folder2List] = useState(FOLDER2_DATA);
  const [selFolder, setSelFolder] = useState<string>(
    `${folder1List[0].id}` ?? "0"
  );

  // フォルダ２の表示
  const forder2Render = useCallback(
    (propsIndex: number) => {
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
    },
    [folder2List, selFolder]
  );

  // フォルダ１の表示
  const forder1Render = useCallback(() => {
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
  }, [folder1List, folder2List, selFolder, forder2Render]);

  return (
    <div className="flex flex-col h-1/3">
      <h3 className="mr-4 whitespace-nowrap text-lg">
        <strong>カテゴリ</strong>
      </h3>
      <div>
        <div className="flex flex-col h-auto">{forder1Render()}</div>
      </div>
    </div>
  );
};
