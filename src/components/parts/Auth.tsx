import { useUser } from "@auth0/nextjs-auth0";
import Link from "next/link";
import type { VFC } from "react";

export const Auth: VFC = () => {
  const { user, error, isLoading } = useUser();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  return (
    <div className="flex items-center justify-center h-full">
      <h2>{user?.name}</h2>
      {user ? (
        <Link href="/api/auth/logout" passHref>
          <a className="m-auto mx-4 px-4 py-2 bg-blue-500">
            <span>ログアウト</span>
          </a>
        </Link>
      ) : (
        <Link href="/api/auth/login" passHref>
          <a className="m-auto mx-4 px-4 py-2 bg-blue-500">
            <span>ログイン</span>
          </a>
        </Link>
      )}
    </div>
  );
};
