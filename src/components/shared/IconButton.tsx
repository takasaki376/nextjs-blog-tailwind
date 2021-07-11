import type { DOMAttributes, ReactNode, VFC } from "react";

type Props = {
  id?: string;
  disabled?: boolean;
  children?: ReactNode;
  className?: string;
  label?: string;
  onClick?: DOMAttributes<HTMLButtonElement>["onClick"];
};

export const IconButton: VFC<Props> = (props) => {
  return (
    <div className={`hover:bg-gray-200 rounded-full ${props.className}`}>
      <div className="content-center">
        <button
          className="whitespace-nowrap outline-none focus:outline-none"
          aria-hidden="true"
          disabled={props.disabled}
          onClick={props.onClick}
        >
          {props.children}
        </button>
      </div>
      <span>{props.label ? props.label : null}</span>
    </div>
  );
};
