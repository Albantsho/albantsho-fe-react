import useAxiosPrivate from "hooks/useAxiosPrivate";

const useNotification = (controller?: AbortController) => {
  const axiosPrivate = useAxiosPrivate();

  return {
    async getAllNotifications() {
      const res = await axiosPrivate.get("/notification/all", {
        signal: controller?.signal,
      });

      return res.data;
    },

    async seenNotification(notificationId: string) {
      const res = await axiosPrivate.patch(
        `/notification/seen/${notificationId}`,
        {},
        {
          signal: controller?.signal,
        }
      );

      return res.data;
    },

    async deleteNotification(notificationId: string) {
      const res = await axiosPrivate.delete(
        `/notification/delete/${notificationId}`,
        {
          signal: controller?.signal,
        }
      );

      return res.data;
    },

    async getOneNotification(notificationId: string) {
      const res = await axiosPrivate.get(`/notification/${notificationId}`, {
        signal: controller?.signal,
      });

      return res.data;
    },
  };
};

export default useNotification;
