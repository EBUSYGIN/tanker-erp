import { useQuery } from "@tanstack/react-query";
import { technicHandler } from "../../entities/technic/handler/handler";

export const useTechnicByConstruction = (limit: number, offset: number, id: string | undefined) =>
  useQuery({
    queryKey: [`technic-${id}`],
    queryFn: () => technicHandler.getTechnicByConstruction(limit, offset, id),
  });
