import type { NextPage } from "next";
import { AuthAction, withAuthUser } from "next-firebase-auth";
import { Loader } from "src/pages/auth/Loader";
import { HomeLayout } from "src/pages/index/HomeLayout";

const Home: NextPage = () => {
  return <HomeLayout title="top">blog</HomeLayout>;
};

/* eslint @typescript-eslint/naming-convention: 0 */
export default withAuthUser({
  whenUnauthedBeforeInit: AuthAction.SHOW_LOADER,
  whenUnauthedAfterInit: AuthAction.REDIRECT_TO_LOGIN,
  LoaderComponent: Loader,
})(Home);
