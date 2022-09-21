import { useRouter } from "next/router";
import { useAuth } from "./auth";

export const withPublic = (Component: any) => {
  return function WithPublic(props: any) {
    const auth: any = useAuth();
    const router = useRouter();
    if (auth.user && auth.user.emailVerified) {
      router.replace("/");
      return <h1>Loading...</h1>;
    }
    return <Component auth={auth} {...props} />;
  };
};

export const withProtected = (Component: any) => {
  return function WithProtected(props: any) {
    const auth: any = useAuth();
    const router = useRouter();
    if (!auth.user || !auth.user.emailVerified) {
      router.replace("/login");
      return <h1>Loading...</h1>;
    }
    return <Component auth={auth} {...props} />;
  };
};
