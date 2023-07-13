import { useQuery } from "react-query";
import { useAxios } from "hooks";

export const useGetAllData = () => {
  const axios = useAxios();

  const fetchData = async () => {
    try {
      const { data } = await axios.get(`{path}}/`);
      return data;
    } catch (error) {
      throw new Error("Error message");
    }
  };

  return useQuery(["name_of_queryset_(uniqe)"], fetchData, {
    onError: (error: any) => {
      console.log(error.message());
    },
    staleTime: Infinity,
  });
};
