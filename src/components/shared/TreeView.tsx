import { ChevronDownIcon, ChevronRightIcon } from "@heroicons/react/outline";
import cc from "classcat";
import type { DOMAttributes, ReactNode, VFC } from "react";
import { memo } from "react";
import { useState } from "react";

type Props = {
  id?: string;
  label: string;
  className?: string;
  selected?: string;
  children?: ReactNode;
  childFolder?: boolean;
  defaultOpen?: boolean;
  startIcon?: JSX.Element;
  onClick?: DOMAttributes<HTMLButtonElement>["onClick"];
};

/* eslint-disable react/display-name */
export const TreeView: VFC<Props> = memo((props) => {
  const [isOpen, setIsOpen] = useState(props.defaultOpen);
  const classes = cc(["flex flex-col my-1", props.className]);

  const handleOpenClick: DOMAttributes<SVGSVGElement>["onClick"] = () => {
    setIsOpen(true);
  };

  const handleCloseClick: DOMAttributes<SVGSVGElement>["onClick"] = () => {
    setIsOpen(false);
  };
  return (
    <div className={classes}>
      <div
        className={cc([
          "w-full flex text-center rounded-md px-2",
          {
            "hover:bg-gray-200": props.selected && props.id !== props.selected,
            "bg-indigo-200 text-indigo-500":
              props.selected && props.id === props.selected,
          },
        ])}
      >
        {props.childFolder ? (
          <div className="flex items-center m-0 text-center">
            {isOpen ? (
              <div className="mr-1">
                <ChevronDownIcon
                  className="w-4 h-4 text-gray-400"
                  onClick={handleCloseClick}
                />
              </div>
            ) : (
              <div className="mr-1">
                <ChevronRightIcon
                  className="w-4 h-4 text-gray-400"
                  onClick={handleOpenClick}
                />
              </div>
            )}
          </div>
        ) : null}
        <div>{props.startIcon}</div>
        <button
          className="flex flex-1 items-center m-0 p-0 whitespace-nowrap text-sm border-0 focus:outline-none"
          onClick={props.onClick}
        >
          {props.label}
        </button>
      </div>

      {isOpen && <div className="ml-4">{props.children}</div>}
    </div>
  );
});
// Propsのデフォルト値
TreeView.defaultProps = {
  defaultOpen: false,
  childFolder: false,
};
