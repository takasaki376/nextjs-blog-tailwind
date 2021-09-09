import "../styles/globals.css";

// import { UserProvider } from "@auth0/nextjs-auth0";
import type { AppProps } from "next/app";
import { initAuth } from "src/context/user/initAuth";

initAuth();

/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
const MyApp = (props: AppProps) => {
  return (
    // <UserProvider>
    <props.Component {...props.pageProps} />
    // </UserProvider>
  );
};
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
export default MyApp;
