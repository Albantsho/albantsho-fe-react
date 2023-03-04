import useScriptsApi from "apis/Scripts.api";
import { IResData } from "interfaces/response";
import { IWriterScript } from "interfaces/script";
import { useRouter } from "next/router";
import querystring from "query-string";
import { useState } from "react";
import { QueryClient, useMutation } from "react-query";
import errorHandler from "utils/error-handler";
import successHandler from "utils/success-handler";

interface IProps {
  listScripts: IWriterScript[];
}

const queryClient = new QueryClient();

const useProjectAccordion = ({ listScripts }: IProps) => {
  const { updateWriterArchiveScript, deleteScript } = useScriptsApi();
  const [expanded, setExpanded] = useState(false);
  const [openPublishScript, setOpenPublishScript] = useState(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const { query, push } = useRouter();
  const openProjectAccordionMenu = Boolean(anchorEl);
  const { mutate: deleteScriptFn, isLoading: isLoadingDeleteScript } =
    useMutation<void, Error, string>((scriptId) => deleteScript(scriptId), {
      onError: (error) => {
        errorHandler(error);
      },
      onSuccess: () => {
        if (listScripts.length <= 1) {
          push(`?archive=false&page=${+String(query.page) - 1}`, undefined, {
            shallow: true,
          });
        }
        queryClient.invalidateQueries(
          ["script", querystring.stringify(query), ""],
          {
            exact: true,
            stale: true,
          }
        );
      },
    });
  const { mutate: archiveScript, isLoading: isLoadingArchiveScript } =
    useMutation<
      IResData<object>,
      Error,
      { payload: { archive: boolean }; scriptId: string }
    >(
      (data) => {
        return updateWriterArchiveScript(
          { archive: data.payload.archive },
          data.scriptId
        );
      },
      {
        onError: (error) => {
          errorHandler(error);
        },
        onSuccess: (data) => {
          successHandler(data.message);
          if (listScripts.length <= 1) {
            push(`?archive=false&page=${+String(query.page) - 1}`, undefined, {
              shallow: true,
            });
          }
          queryClient.invalidateQueries(
            ["script", querystring.stringify(query), ""],
            {
              exact: true,
              stale: true,
            }
          );
        },
      }
    );

  const handleOpenPublishScriptModal = () => {
    setOpenPublishScript(true);
  };

  const handleOpenProjectAccordionMenu = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.stopPropagation();
    setAnchorEl(event.currentTarget);
  };

  const handleCloseProjectAccordionMenu = (
    event: React.MouseEvent<HTMLButtonElement | HTMLLIElement>
  ) => {
    event.stopPropagation();
    setAnchorEl(null);
  };

  const archivingScript =
    (scriptId: string) =>
    async (event: React.MouseEvent<HTMLButtonElement | HTMLLIElement>) => {
      event.stopPropagation();
      archiveScript({ payload: { archive: true }, scriptId });
      handleCloseProjectAccordionMenu(event);
    };

  const deletingScript =
    (scriptId: string) =>
    async (event: React.MouseEvent<HTMLButtonElement | HTMLLIElement>) => {
      event.stopPropagation();
      deleteScriptFn(scriptId);
      handleCloseProjectAccordionMenu(event);
    };

  const expandAccordionHandler = () => setExpanded(!expanded);

  return {
    expanded,
    anchorEl,
    openProjectAccordionMenu,
    isLoadingDeleteScript,
    handleOpenProjectAccordionMenu,
    archivingScript,
    deletingScript,
    expandAccordionHandler,
    handleCloseProjectAccordionMenu,
    isLoadingArchiveScript,
    handleOpenPublishScriptModal,
    setOpenPublishScript,
    openPublishScript,
  };
};

export default useProjectAccordion;
