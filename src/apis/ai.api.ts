import useAxiosPrivate from "hooks/useAxiosPrivate";
import { IResData } from "interfaces/response";
import { useCallback } from "react";

interface IPayloadCompleteScript {
  script: string;
  paragraph: number;
}

interface IPayloadCompleteStory {
  story: string;
  paragraph: number;
}

interface IPayloadAddDetailToStory {
  story: string;
  paragraph: number;
}

interface IPayloadSelectTitle {
  script: string;
}
interface IPayloadConvertStoryToScript {
  story: string;
}



const useAiApi = (controller?: AbortController) => {
  const axiosPrivate = useAxiosPrivate();

  const completeScript = useCallback(
    async (payload: IPayloadCompleteScript) => {
      const res = await axiosPrivate.post(
        `/ai/script/complete`,
        payload, {
        signal: controller?.signal,
      }
      );

      return res.data.data;
    },

    [axiosPrivate, controller?.signal]
  );

  const selectTitleForScript = useCallback(
    async (payload: IPayloadSelectTitle) => {
      const res = await axiosPrivate.post(`/ai/script/suggestTitle`, payload, {
        signal: controller?.signal,
      });

      return res.data.data;
    },

    [axiosPrivate, controller?.signal]
  );

  const completeStory = useCallback(
    async (payload: IPayloadCompleteStory) => {
      const res = await axiosPrivate.post(`/ai/story/complete`, payload, {
        signal: controller?.signal,
      });

      return res.data.data;
    },

    [axiosPrivate, controller?.signal]
  );

  const addDetailToStory = useCallback(
    async (payload: IPayloadAddDetailToStory) => {
      const res = await axiosPrivate.post(`/ai/story/addDetails`, payload, {
        signal: controller?.signal,
      });

      return res.data.data;
    },

    [axiosPrivate, controller?.signal]
  );

  const convertStoryToScript = useCallback(
    async (payload: IPayloadConvertStoryToScript) => {
      const res = await axiosPrivate.post(`/ai/story/toScript`, payload, {
        signal: controller?.signal,
      });

      return res.data.data;
    },

    [axiosPrivate, controller?.signal]
  );

  return {
    completeScript,
    selectTitleForScript,
    completeStory,
    addDetailToStory,
    convertStoryToScript
  };
};

export default useAiApi;
