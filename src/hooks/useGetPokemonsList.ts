import { useQuery } from "react-query";
import { useAxios } from "hooks";

export const useGetPokemonsList = () => {
  const axios = useAxios();

  const fetchGetPokemonsList = async () => {
    try {
      const { data } = await axios.get("pokemon/");
      return data;
    } catch (error) {
      throw new Error("Pokemons list not fetched");
    }
  };

  return useQuery("pokemons_list", fetchGetPokemonsList, {
    onError: (error: any) => {
      console.log(String(error));
    },
    staleTime: Infinity,
  });
};
