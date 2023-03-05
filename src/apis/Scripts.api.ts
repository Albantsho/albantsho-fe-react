import useAxios from "hooks/useAxios";
import useAxiosPrivate from "hooks/useAxiosPrivate";
import { IBidInMarketplace } from "interfaces/bid";
import { ICollaboratorList } from "interfaces/collaborator";
import { IResData } from "interfaces/response";
import {
  IBidScript,
  IClosedScript,
  IFullInformationScript,
  IScript,
  IUnCompletedScript,
  IUnlistedScript,
  IWriterScript,
} from "interfaces/script";
import { useCallback } from "react";

export interface ICreateNewScriptPayload {
  title: string;
  tagline: string;
}

interface IUpdateCoverPageScriptPayload {
  title?: string;
  writtenBy?: string;
  basedOn?: string;
  draftDate?: string;
  names?: string;
}

interface IUpdateScriptPayload {
  scriptFormat?: string;
  storyFormat?: string;
  title?: string;
  primaryGenre?: string;
  secondaryGenre?: string;
  primaryCast?: string;
  secondaryCast?: string;
  estimatedBudget?: string;
  tagline?: string;
  logLine?: string;
  synopsis?: string;
  storyWorld?: string;
  actStructure?: string;
  characterBible?: string;
  storyTopics?: string[];
  adaption?: boolean;
  inspiration?: string;
  motivation?: string;
  progress?: number;
  scriptPart?: string;
  totalPages?: number;
}

interface IGiveRateToScriptPayload {
  scriptId: string;
  rate: string;
}

interface IData_createScript {
  script: IFullInformationScript;
}

interface IData_getWriterScript {
  scripts: IWriterScript[];
  currentPage: number;
  pagesCount: number;
}

interface IData_getAllScript {
  scripts: IScript[];
  currentPage: number;
  pagesCount: number;
}

export interface IData_getAllPublishedScript {
  scripts: IBidScript[];
  currentPage: number;
  pagesCount: number;
}

interface IData_getAllUnPublishedScript {
  scripts: IUnlistedScript[];
  currentPage: number;
  pagesCount: number;
}

interface IData_getAllUnCompletedScript {
  scripts: IUnCompletedScript[];
  currentPage: number;
  pagesCount: number;
}

interface IData_getAllSoldScript {
  scripts: IClosedScript[];
  currentPage: number;
  pagesCount: number;
}

interface IData_getAllCollaboratorScript {
  script: ICollaboratorList;
}

interface IData_getOneScript {
  script: IFullInformationScript;
  bid: IBidInMarketplace;
}

const useScriptsApi = (controller?: AbortController) => {
  const axiosPrivate = useAxiosPrivate();
  const axios = useAxios();

  const createNewScript = useCallback(
    async (payload: ICreateNewScriptPayload) => {
      const res = await axiosPrivate.post<IResData<IData_createScript>>(
        "/script/create",
        payload,
        {
          signal: controller?.signal,
        }
      );

      return res.data.data;
    },

    [axiosPrivate, controller?.signal]
  );

  const getWriterAllScripts = useCallback(
    async (query: string, search?: string) => {
      const res = await axiosPrivate.get<IResData<IData_getWriterScript>>(
        `/script/writer/all?limit=10&${query}&search=${search}`,
        {
          signal: controller?.signal,
        }
      );

      return res.data.data;
    },

    [axiosPrivate, controller?.signal]
  );

  const getScript = useCallback(
    async (scriptId: string) => {
      const res = await axios.get<IResData<IData_getOneScript>>(
        `/script/${scriptId}`,
        {
          signal: controller?.signal,
        }
      );

      return res.data.data;
    },
    [axios, controller?.signal]
  );

  const getAllScripts = useCallback(
    async (query: string) => {
      const res = await axios.get<IResData<IData_getAllScript>>(
        `/script/all?limit=10&${query}`,
        {
          signal: controller?.signal,
        }
      );

      return res.data.data;
    },
    [axios, controller?.signal]
  );

  const getProducerAllScripts = useCallback(
    async (search: string) => {
      const res = await axiosPrivate.get<IResData<IData_getAllScript>>(
        `/script/producer/all?search=${search}`,
        {
          signal: controller?.signal,
        }
      );

      return res.data.data;
    },
    [axiosPrivate, controller?.signal]
  );

  const getWriterAllPublishedScripts = useCallback(
    async (searchQuery: string) => {
      const res = await axiosPrivate.get<IResData<IData_getAllPublishedScript>>(
        `/script/writer/published/all?search=${searchQuery}`,
        {
          signal: controller?.signal,
        }
      );

      return res.data.data;
    },
    [axiosPrivate, controller?.signal]
  );

  const getWriterAllUnPublishedScripts = useCallback(
    async (searchQuery: string) => {
      const res = await axiosPrivate.get<
        IResData<IData_getAllUnPublishedScript>
      >(`/script/writer/unpublished/all?search=${searchQuery}`, {
        signal: controller?.signal,
      });

      return res.data.data;
    },
    [axiosPrivate, controller?.signal]
  );

  const getWriterAllInCompletedScripts = useCallback(
    async (searchQuery: string) => {
      const res = await axiosPrivate.get<
        IResData<IData_getAllUnCompletedScript>
      >(`/script/writer/incomplete/all?search=${searchQuery}`, {
        signal: controller?.signal,
      });

      return res.data.data;
    },
    [axiosPrivate, controller?.signal]
  );

  const getWriterAllSoldScripts = useCallback(
    async (searchQuery: string) => {
      const res = await axiosPrivate.get<IResData<IData_getAllSoldScript>>(
        `/script/writer/sold/all?search=${searchQuery}`,
        {
          signal: controller?.signal,
        }
      );

      return res.data.data;
    },
    [axiosPrivate, controller?.signal]
  );

  const searchScripts = useCallback(
    async (search: string) => {
      const res = await axiosPrivate.get<IResData<{ scripts: IScript[] }>>(
        `/script/search?search=${search}`,
        {
          signal: controller?.signal,
        }
      );

      return res.data.data;
    },
    [axiosPrivate, controller?.signal]
  );

  const listAllCollaborators = useCallback(
    async (scriptId: string) => {
      const res = await axiosPrivate.get<
        IResData<IData_getAllCollaboratorScript>
      >(`/script/collaborators/${scriptId}`, {
        signal: controller?.signal,
      });

      return res.data.data;
    },
    [axiosPrivate, controller?.signal]
  );

  const getCoverPageInformation = useCallback(
    async (scriptId: string) => {
      const res = await axiosPrivate.get<IResData<object>>(
        `/script/coverpage/${scriptId}`,
        {
          signal: controller?.signal,
        }
      );

      return res.data.data;
    },
    [axiosPrivate, controller?.signal]
  );

  const deleteScript = useCallback(
    async (scriptId: string) => {
      const res = await axiosPrivate.delete<IResData<object>>(
        `/script/delete/${scriptId}`,
        {
          signal: controller?.signal,
        }
      );
      return res.data;
    },
    [axiosPrivate, controller?.signal]
  );

  const updateWriterArchiveScript = useCallback(
    async (payload: { archive: boolean }, scriptId: string) => {
      const res = await axiosPrivate.patch<IResData<object>>(
        `/script/update/archive/${scriptId}`,
        payload,
        {
          signal: controller?.signal,
        }
      );
      return res.data;
    },
    [axiosPrivate, controller?.signal]
  );

  const updateCoverPageScript = useCallback(
    async (payload: IUpdateCoverPageScriptPayload, scriptId: string) => {
      const res = await axiosPrivate.patch<IResData<object>>(
        `/script/update/coverpage/${scriptId}`,
        payload,
        {
          signal: controller?.signal,
        }
      );
      return res.data;
    },
    [axiosPrivate, controller?.signal]
  );

  const verifyScript = useCallback(
    async (scriptId: string) => {
      const res = await axiosPrivate.patch<IResData<object>>(
        `/script/verify/${scriptId}`,
        {},
        {
          signal: controller?.signal,
        }
      );
      return res.data;
    },
    [axiosPrivate, controller?.signal]
  );

  const updateScript = useCallback(
    async (payload: IUpdateScriptPayload, id: string, query?: string) => {
      const res = await axiosPrivate.patch<IResData<object>>(
        `/script/update/${id}?${query}`,
        payload,
        {
          signal: controller?.signal,
        }
      );
      return res.data;
    },
    [axiosPrivate, controller?.signal]
  );

  const updatePublishedScript = useCallback(
    async (payload: { published: boolean }, scriptId: string) => {
      const res = await axiosPrivate.patch<IResData<object>>(
        `/script/update/publish/${scriptId}`,
        payload,
        {
          signal: controller?.signal,
        }
      );
      return res.data;
    },
    [axiosPrivate, controller?.signal]
  );

  const giveRateToScript = useCallback(
    async (payload: IGiveRateToScriptPayload) => {
      const res = await axiosPrivate.post<IResData<object>>(
        "/script/rate",
        payload,
        {
          signal: controller?.signal,
        }
      );
      return res.data;
    },
    [axiosPrivate, controller?.signal]
  );

  return {
    createNewScript,
    getWriterAllScripts,
    deleteScript,
    updateWriterArchiveScript,
    getScript,
    updateCoverPageScript,
    verifyScript,
    getAllScripts,
    getProducerAllScripts,
    searchScripts,
    giveRateToScript,
    getWriterAllPublishedScripts,
    getWriterAllUnPublishedScripts,
    getWriterAllInCompletedScripts,
    getWriterAllSoldScripts,
    listAllCollaborators,
    getCoverPageInformation,
    updatePublishedScript,
    updateScript,
  };
};

export default useScriptsApi;
