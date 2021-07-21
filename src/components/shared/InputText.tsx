import cc from "classcat";
import type { DOMAttributes, VFC } from "react";
import { useState } from "react";
import { IconButton } from "src/components/shared/IconButton";

type Props = {
  title?: string;
  placeholder?: string;
  className?: string;
  value?: string;
  startIcon?: JSX.Element;
  onChange?: DOMAttributes<HTMLInputElement>["onChange"];
  required?: boolean;
};

export const InputText: VFC<Props> = (props) => {
  const [isFocus, setIsFocus] = useState(false);

  const handleOnClickSearch: DOMAttributes<HTMLButtonElement>["onClick"] =
    () => {
      setIsFocus(true);
    };
  const handleOnFocus: DOMAttributes<HTMLInputElement>["onFocus"] = () => {
    setIsFocus(true);
  };

  const handleLostFocus: DOMAttributes<HTMLInputElement>["onBlur"] = () => {
    setIsFocus(false);
  };

  if (!isFocus && props.startIcon) {
    return (
      <IconButton className="p-2 w-10 h-10" onClick={handleOnClickSearch}>
        {props.startIcon}
      </IconButton>
    );
  }

  return (
    <div className="flex flex-col">
      <div className="flex">
        {props.title ? (
          <div>
            <span className="text-black">{props.title}</span>
          </div>
        ) : null}
        {props.required ? (
          <div className="relative right-0">
            <span className="text-black">※</span>
          </div>
        ) : null}
      </div>
      <div
        className={cc([
          "flex text-center h-8 my-auto pl-3 pr-10 rounded-xl border-2 transition-colors ",
          {
            "border-transparent": !isFocus,
            "outline-none border-blue-600": isFocus,
          },
          props.className,
        ])}
      >
        {/* 先頭にアイコンを表示する */}
        {props.startIcon ? props.startIcon : null}
        {/* テキストボックス */}
        <input
          type="text"
          autoFocus
          value={props.value}
          className="p-0 m-0 w-full border-white outline-none"
          placeholder={props.placeholder}
          onChange={props.onChange}
          onFocus={handleOnFocus}
          onBlur={handleLostFocus}
        />
      </div>
    </div>
  );
};
