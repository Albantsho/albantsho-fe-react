import useScriptsApi from "apis/Scripts.api";
import { debounce } from "lodash";
import { useCallback, useState } from "react";
import { useQuery } from "react-query";

const useHeroSection = () => {
  const { searchScripts } = useScriptsApi();
  const [searchQuery, setSearchQuery] = useState("");

  const { data: searchScriptData } = useQuery("script search", () =>
    searchScripts(searchQuery)
  );

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

  return { handleSearch, searchScriptData, searchQuery };
};

export default useHeroSection;
