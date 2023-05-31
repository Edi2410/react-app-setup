import Axios, { AxiosInstance, AxiosResponse } from "axios";
import { createContext, createElement, useMemo } from "react";

export const AxiosContext = createContext<AxiosInstance>(Axios);

export const AxiosProvider = ({
  children,
}: React.PropsWithChildren<unknown>) => {
  const auth = useMemo(() => {
    const axios = Axios.create({ baseURL: "https://pokeapi.co/api/v2/" });

    axios.interceptors.response.use(
      (response: AxiosResponse) => response,
      (error: any) => {
        console.log(error);
        return Promise.reject(error); // or return error; if you want to maintain the original behavior
      }
    );

    return axios;
  }, []);

  return createElement(AxiosContext.Provider, { value: auth }, children);
};
