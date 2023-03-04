import useAxiosPrivate from "hooks/useAxiosPrivate";
import { INotification } from "interfaces/notification";
import { IResData } from "interfaces/response";
import { useCallback } from "react";

export interface IData_getNotifications {
  notifications: INotification[];
}

interface IData_getNotification {
  notification: INotification;
}

const useNotification = (controller?: AbortController) => {
  const axiosPrivate = useAxiosPrivate();

  const getAllNotifications = useCallback(async () => {
    const res = await axiosPrivate.get<IResData<IData_getNotifications>>(
      "/notification/all",
      {
        signal: controller?.signal,
      }
    );

    return res.data.data;
  }, [axiosPrivate, controller?.signal]);

  const getOneNotification = useCallback(
    async (notificationId: string) => {
      const res = await axiosPrivate.get<IResData<IData_getNotification>>(
        `/notification/${notificationId}`,
        {
          signal: controller?.signal,
        }
      );

      return res.data;
    },

    [axiosPrivate, controller?.signal]
  );

  const seenNotification = useCallback(
    async (notificationId: string) => {
      const res = await axiosPrivate.patch<IResData<object>>(
        `/notification/seen/${notificationId}`,
        {},
        {
          signal: controller?.signal,
        }
      );
      return res.data;
    },

    [axiosPrivate, controller?.signal]
  );

  const deleteNotification = useCallback(
    async (notificationId: string) => {
      const res = await axiosPrivate.delete<IResData<object>>(
        `/notification/delete/${notificationId}`,
        {
          signal: controller?.signal,
        }
      );

      return res.data;
    },

    [axiosPrivate, controller?.signal]
  );

  return {
    getAllNotifications,
    getOneNotification,
    seenNotification,
    deleteNotification,
  };
};

export default useNotification;
