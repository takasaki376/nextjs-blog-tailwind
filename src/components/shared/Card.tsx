import type { VFC } from "react";
import type { BlogType } from "src/types";

type Props = Pick<BlogType, "title" | "content" | "createdAt">;

export const Card: VFC<Props> = (props) => {
  return (
    <div className="flex flex-col">
      <div>{props.title}</div>
      <div>{props.content}</div>
    </div>
  );
};
