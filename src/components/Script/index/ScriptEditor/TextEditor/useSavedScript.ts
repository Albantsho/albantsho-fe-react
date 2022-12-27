import useDraftApi from "apis/Draft.api";
import useScriptValueStore from "app/scriptValue.store";
import errorHandler from "utils/error-handler";
import { DefaultEventsMap } from "@socket.io/component-emitter";
import { Socket } from "socket.io-client";
import { useRouter } from "next/router";

const useSavedScript = (socket: Socket<DefaultEventsMap, DefaultEventsMap>) => {
  const { query } = useRouter();
  const { scriptValue } = useScriptValueStore((state) => ({
    setScriptValue: state.setScriptValue,
    scriptValue: state.scriptValue,
  }));
  const { saveFileDraft } = useDraftApi();

  socket.on("saveScriptOrder", async () => {
    try {
      console.log(scriptValue);
      const res = await saveFileDraft(query.id as string, {
        content: scriptValue,
      });
      socket.emit("scriptSaved");
      console.log(res);
    } catch (error) {
      errorHandler(error);
    }
  });

  return null;
};

export default useSavedScript;
