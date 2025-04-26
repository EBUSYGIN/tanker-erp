import { useEffect, useState } from "react";

export const useFetch = <T>(handler: () => Promise<T | undefined>) => {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchData = async () => {
    try {
      const data = await handler();
      if (!data) {
        throw new Error("Ошибка загрузки данных");
      }
      setData(data);
    } catch (error) {
      console.log(error);
      setError("Не удалось загрузить данные");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { data, isLoading, error, fetchData };
};
