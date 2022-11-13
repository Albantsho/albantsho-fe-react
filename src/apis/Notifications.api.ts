import api from "./configs/axios.config";

const useNotificationsApi = (controller?: AbortController) => {
  // const useUser = () => {
  //   const { user } = useUserStore(
  //     (store) => ({
  //       user: store.user,
  //     }),
  //     shallow
  //   );
  //   return { user };
  // };

  // const {
  //   user: { token },
  // } = useUser();

  return {
    async getUserInformation() {
      const res = await api.get("/notifications", {
        signal: controller?.signal,
      });

      return res.data;
    },
  };
};

export default useNotificationsApi;
