import "firebase/auth";

import firebase from "firebase/app";
import type { NextPage } from "next";
import { AuthAction, withAuthUser } from "next-firebase-auth";
import { useCallback } from "react";
import { GoogleIcon } from "src/components/icons";
import { Loader } from "src/pages/auth/Loader";

const Signin: NextPage = () => {
  const handleGoogleAuth = useCallback(() => {
    const googleProvider = new firebase.auth.GoogleAuthProvider();
    const auth = firebase.auth();
    auth.signInWithRedirect(googleProvider);
  }, []);

  return (
    <div>
      <button
        className="py-4 w-72 hover:bg-gray-100 focus:bg-gray-100 bg-white sm:w-80"
        onClick={handleGoogleAuth}
      >
        <div className="flex">
          <GoogleIcon className="mr-3 w-6 h-6" />
          <span>Googleでログイン</span>
        </div>
      </button>
    </div>
  );
};
/* eslint @typescript-eslint/naming-convention: 0 */
export default withAuthUser({
  whenAuthed: AuthAction.REDIRECT_TO_APP,
  whenUnauthedBeforeInit: AuthAction.SHOW_LOADER,
  whenUnauthedAfterInit: AuthAction.RENDER,
  LoaderComponent: Loader,
})(Signin);
