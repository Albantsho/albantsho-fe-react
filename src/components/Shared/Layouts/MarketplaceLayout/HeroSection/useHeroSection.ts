import useScriptsApi from "apis/Scripts.api";
import { IScript } from "interfaces/script";
import { debounce } from "lodash";
import { useCallback, useEffect, useState } from "react";

const useHeroSection = () => {
  const { searchScripts } = useScriptsApi();
  const [searchQuery, setSearchQuery] = useState("");
  const [scriptList, setScriptList] = useState<Array<IScript>>([]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleSearch = useCallback(
    debounce(
      (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(e.target.value.trim());
      },
      2000,
      { leading: false }
    ),
    [searchQuery]
  );

  useEffect(() => {
    async function getScripts() {
      try {
        const res = await searchScripts(searchQuery);
        setScriptList(res.data.scripts);
      } catch (error) {
        ("");
      }
    }

    getScripts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchQuery]);

  return { handleSearch, scriptList, searchQuery };
};

export default useHeroSection;
