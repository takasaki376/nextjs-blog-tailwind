import Head from "next/head";
import type { ReactNode, VFC } from "react";
import { HomeHeader } from "src/components/HomeParts/HomeHeader";
import { HomeRight } from "src/components/HomeParts/HomeRight";

type Props = {
  children: ReactNode;
  title: string;
};

export const HomeLayout: VFC<Props> = (props) => {
  return (
    <div className="flex w-full h-screen">
      <Head>
        <title>{props.title}</title>
      </Head>
      <div className="flex flex-col w-full h-screen overscroll-none">
        <header className="flex w-full h-20">
          <HomeHeader />
        </header>
        <main className="flex flex-row w-full h-screen">
          <div className="flex-auto overflow-y-auto">{props.children}</div>
          <div className="flex-1 max-w-52 h-full overscroll-none">
            <HomeRight />
          </div>
        </main>
      </div>
    </div>
  );
};
