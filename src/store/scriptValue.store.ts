import create from "zustand";

interface IScriptValueState {
  scriptValue: string;
  setScriptValue: (script: string) => void;
}

const useScriptValueStore = create<IScriptValueState>()((set) => ({
  scriptValue: "",
  setScriptValue: (scriptValue: string) =>
    set((state) => ({ ...state, scriptValue })),
}));

export default useScriptValueStore;
