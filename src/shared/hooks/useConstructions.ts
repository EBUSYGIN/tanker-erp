import { useQuery } from "@tanstack/react-query";
import { constructionHandler } from "../../entities/construction/handler";

export const useConstructions = () =>
  useQuery({
    queryKey: [`constructions`],
    queryFn: () => constructionHandler.getAll(),
  });
