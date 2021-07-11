import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/outline";
import cc from "classcat";
import type { DOMAttributes, ReactNode, VFC } from "react";
import { useState } from "react";

import { Divider } from "./Divider";

type Props = {
  id?: string;
  label: string;
  className?: string;
  selected?: string;
  children?: ReactNode;
  childAccordion?: boolean;
  defaultOpen?: boolean;
  onClick?: DOMAttributes<HTMLButtonElement>["onClick"];
};

export const Accordion: VFC<Props> = (props) => {
  const [isOpen, setIsOpen] = useState(props.defaultOpen);

  const handleOpenClick: DOMAttributes<SVGSVGElement>["onClick"] = () => {
    setIsOpen(true);
  };

  const handleCloseClick: DOMAttributes<SVGSVGElement>["onClick"] = () => {
    setIsOpen(false);
  };
  return (
    <div className={`flex flex-col my-1 ${props.className}`}>
      <div
        className={cc([
          "w-full flex text-center rounded-md px-2 py-1",
          {
            "hover:bg-gray-200": props.selected && props.id !== props.selected,
            "bg-indigo-200 text-indigo-500":
              props.selected && props.id === props.selected,
          },
        ])}
      >
        <button
          className="flex flex-1 items-center m-0 p-0 whitespace-nowrap text-sm border-0 focus:outline-none"
          onClick={props.onClick}
        >
          {props.label}
        </button>
        {props.childAccordion ? (
          <div className="flex items-center m-0 text-center">
            {isOpen ? (
              <div className="mr-1">
                <ChevronUpIcon
                  className="w-4 h-4 text-gray-400"
                  onClick={handleCloseClick}
                />
              </div>
            ) : (
              <div className="mr-1">
                <ChevronDownIcon
                  className="w-4 h-4 text-gray-400"
                  onClick={handleOpenClick}
                />
              </div>
            )}
          </div>
        ) : null}
      </div>

      {isOpen && (
        <div className="flex flex-col ml-4 h-auto">{props.children}</div>
      )}
      <Divider />
    </div>
  );
};
// Propsのデフォルト値
Accordion.defaultProps = {
  defaultOpen: false,
  childAccordion: false,
};
