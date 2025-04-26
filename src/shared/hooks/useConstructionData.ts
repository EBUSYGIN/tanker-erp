import { useQuery } from "@tanstack/react-query";
import { constructionHandler } from "../../entities/construction/handler";

export const useConstructionData = (id: string | undefined) =>
  useQuery({
    queryKey: [`construcntion-${id}`],
    queryFn: () => constructionHandler.getOne(id),
  });
