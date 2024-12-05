import { useQuery } from "@tanstack/react-query";
import { getAllStudents } from "../services/api";
export const useApiGetStudents = () => {
  return useQuery({
    queryKey: ["students"],
    queryFn: getAllStudents,
  });
};
