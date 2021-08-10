import { PlusIcon } from "@heroicons/react/outline";
import Head from "next/head";
import type { ReactNode, VFC } from "react";
import { IconButton } from "src/components/shared/IconButton";
import { HomeHeader } from "src/pages/index/HomeHeader";
import { HomeRight } from "src/pages/index/HomeRight";

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
          <div className="flex-auto overflow-y-auto">
            {props.children}
            <div className="h-[94%] relative">
              <IconButton className="absolute bottom-0 right-3 p-2 w-10 h-10 bg-blue-700">
                <PlusIcon className="bg-gray-800" />
              </IconButton>
            </div>
          </div>
          <div className="flex-1 max-w-52 h-full overscroll-none">
            <HomeRight />
          </div>
        </main>
      </div>
    </div>
  );
};
