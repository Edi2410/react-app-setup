import { useQuery } from "react-query";
import { useAxios } from "hooks";

export const useGetDataByID = (index: number) => {
  const axios = useAxios();

  const fetchDataById = async () => {
    try {
      const { data } = await axios.get(`{path}/${index}`);
      return data;
    } catch (error) {
      throw new Error("Error message");
    }
  };

  return useQuery(["name_of_queryset_(uniqe)", index], fetchDataById, {
    onError: (error: any) => {
      console.log(error.message());
    },
    staleTime: Infinity,
    enabled: index ? true : false,
  });
};
