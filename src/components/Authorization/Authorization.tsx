import Loader from "@shared/Loader/Loader";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import routes from "routes/routes";
import useUserStore from "store/user.store";

const Authorization = ({ children }: React.PropsWithChildren) => {
  const { pathname, replace } = useRouter();
  const urlRoutes = Object.values(routes);
  const user = useUserStore((state) => state.user);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const foundRoute = urlRoutes.find((urlRoute) => urlRoute.url === pathname);

    if (foundRoute?.mustAuthenticated === "no") {
      if (!user) return;
      if (user.emailVerified) {
        user.userType === "writer"
          ? replace(routes.writerDashboard.url)
          : user.userType === "producer"
          ? replace(routes.producerDashboard.url)
          : user.userType === "admin"
          ? replace(routes.adminDashboard.url)
          : replace(routes.reviewerDashboard.url);

        foundRoute.url !== pathname && setLoading(false);
      } else {
        setLoading(false);
        return;
      }
    } else if (foundRoute?.mustAuthenticated === "yes") {
      if (!user.emailVerified) {
        replace(routes.signin.url);
        foundRoute.url !== pathname && setLoading(false);
      } else {
        const matchedRule = foundRoute.permission.find(
          (rule) => rule === user.userType
        );
        if (pathname === "/dashboard") {
          if (user.emailVerified) {
            user.userType === "writer"
              ? replace(routes.writerDashboard.url)
              : user.userType === "producer"
              ? replace(routes.producerDashboard.url)
              : user.userType === "admin"
              ? replace(routes.adminDashboard.url)
              : replace(routes.reviewerDashboard.url);
            foundRoute.url !== pathname && setLoading(false);
          } else {
            setLoading(false);
            return;
          }
        }
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

  return <>{loading ? <Loader /> : children}</>;
};

export default Authorization;
