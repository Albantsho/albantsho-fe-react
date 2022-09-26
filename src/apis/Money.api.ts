import api from "./configs/axios.config";

const MoneyApi = (controller?: AbortController) => ({
  async banks() {
    const res = await api.get("/banks", {
      signal: controller?.signal,
    });

    return res.data;
  },
  async convertEthToUsd() {
    const res = await api.get("/external/currency/converter", {
      signal: controller?.signal,
    });

    return res.data;
  },
  async banksBranch(payload: string) {
    const res = await api.post("/banks/branch", payload, {
      signal: controller?.signal,
    });

    return res.data;
  },
});

export default MoneyApi;
