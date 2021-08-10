import type { NextPage } from "next";
import Link from "next/link";
import { GoogleIcon } from "src/components/icons";

const Login: NextPage = () => {
  return (
    <Link href="/api/auth/login">
      <a>
        <GoogleIcon className="mr-3 w-6 h-6" />
        <span>Googleでログイン</span>
      </a>
    </Link>
  );
};
export default Login;
