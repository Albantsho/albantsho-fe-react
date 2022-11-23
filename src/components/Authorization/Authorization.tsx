import useUserStore from "app/user.store";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { DotLoader } from "react-spinners";
import routes from "routes/routes";

const Authorization = ({ children }: React.PropsWithChildren) => {
  const { pathname, replace } = useRouter();
  const urlRoutes = Object.values(routes);
  const user = useUserStore((state) => state.user);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const foundRoute = urlRoutes.find((urlRoute) => urlRoute.url === pathname);

    if (foundRoute?.mustAuthenticated === "no") {
      if (user.email_verified) {
        replace(routes.home.url);
        foundRoute.url !== pathname && setLoading(false);
      } else {
        setLoading(false);
        return;
      }
    } else if (foundRoute?.mustAuthenticated === "yes") {
      if (!user.email_verified) {
        replace(routes.signin.url);
        foundRoute.url !== pathname && setLoading(false);
      } else {
        const matchedRule = foundRoute.permission.find(
          (rule) => rule === user.user_type
        );
        if (!matchedRule) {
          replace(routes.home.url);
          foundRoute.url !== pathname && setLoading(false);
          return;
        }
        setLoading(false);
        return;
      }
    } else if (foundRoute?.mustAuthenticated === "noMatter") {
      setLoading(false);
      return;
    } else {
      setLoading(false);
      return;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [urlRoutes]);

  return (
    <>
      {loading ? (
        <div className="min-h-screen flex items-center">
          <DotLoader color="#7953B5" className="mx-auto mt-10" />
        </div>
      ) : (
        children
      )}
    </>
  );
};

export default Authorization;
