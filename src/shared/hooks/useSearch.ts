import { useEffect, useState } from "react";

export const useSearch = <T>(
  data: T[] | null,
  searchFunction: (data: T[] | null, searchBy: string) => T[] | null,
  searchParam: string
) => {
  const [searchData, setSearchData] = useState<T[] | null>(data);

  useEffect(() => {
    if (!data) return;
    setSearchData(searchFunction(data, searchParam));
  }, [data, searchFunction, searchParam]);

  return searchData;
};
