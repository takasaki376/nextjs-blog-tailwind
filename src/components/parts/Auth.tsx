import Link from "next/link";
import { useAuthUser } from "next-firebase-auth";
import type { VFC } from "react";
import { useCallback } from "react";

export const Auth: VFC = () => {
  const AuthUser = useAuthUser();

  const handleLogout = useCallback(() => {
    return AuthUser.signOut();
  }, []);

  return (
    <div className="flex items-center justify-center h-full">
      <h2>{AuthUser.displayName}</h2>
      {AuthUser.displayName ? (
        <button
          onClick={handleLogout}
          className="m-auto mx-4 px-4 py-2 bg-blue-500"
        >
          <span>ログアウト</span>
        </button>
      ) : (
        <Link href="/auth/signin" passHref>
          <a className="m-auto mx-4 px-4 py-2 bg-blue-500">
            <span>ログイン</span>
          </a>
        </Link>
      )}
    </div>
  );
};
