import { useQuery } from "react-query";
import { useAxios } from "hooks";

export const useGetPokemonDetails = (index: number) => {
  const axios = useAxios();

  const fetchGetPokemonDetails = async () => {
    try {
      const { data } = await axios.get(`pokemon/${index}`);
      return data;
    } catch (error) {
      throw new Error("Pokemons details not fetched");
    }
  };

  return useQuery(["pokemon_details", index], fetchGetPokemonDetails, {
    onError: (error: any) => {
      console.log(String(error));
    },
    staleTime: Infinity,
  });
};
