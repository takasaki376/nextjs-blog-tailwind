import { PlusIcon } from "@heroicons/react/outline";
import type { NextPage } from "next";
import { IconButton } from "src/components/shared/IconButton";
import { HomeLayout } from "src/layouts/HomeLayout";

const Home: NextPage = () => {
  return (
    <HomeLayout title="top">
      blog
      <div className="h-[94%] relative">
        <IconButton className="absolute bottom-0 right-3 p-2 w-10 h-10 bg-blue-700">
          <PlusIcon className="bg-gray-800" />
        </IconButton>
      </div>
    </HomeLayout>
  );
};
export default Home;
