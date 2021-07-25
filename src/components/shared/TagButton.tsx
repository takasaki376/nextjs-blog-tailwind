import cc from "classcat";
import type { DOMAttributes, ReactNode, VFC } from "react";
import { memo } from "react";
import { useState } from "react";

type Props = {
  children?: ReactNode;
  className?: string;
  onClick?: DOMAttributes<HTMLButtonElement>["onClick"];
};

/* eslint-disable react/display-name */
export const TagButton: VFC<Props> = memo((props) => {
  const [isSelect, setIsSelect] = useState(false);

  const handleClick: DOMAttributes<HTMLButtonElement>["onClick"] = (e) => {
    setIsSelect(!isSelect);
    if (props.onClick) {
      props.onClick(e);
    }
  };

  return (
    <button
      className={cc([
        "border border-transparent m-0.5 p-1 text-xs rounded-3xl focus:outline-none items-center whitespace-nowrap",
        {
          "btn-contained-blue": isSelect,
          "btn-outline-blue": !isSelect,
        },
        props.className,
      ])}
      onClick={handleClick}
    >
      {props.children}
    </button>
  );
});
