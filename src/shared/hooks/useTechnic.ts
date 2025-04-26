import { useQuery } from "@tanstack/react-query";
import { ITechnicRequest } from "../../entities/technic/types";
import { technicHandler } from "../../entities/technic/handler/handler";

export const useTechnic = (limit: number, offset: number, params?: ITechnicRequest) =>
  useQuery({
    queryKey: [`technic`],
    queryFn: () => technicHandler.getTechnics(limit, offset, params),
  });
