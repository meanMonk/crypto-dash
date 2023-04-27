import { AxiosResponse } from "axios";
import AxiosInstance from "./axiosInstance"


export async function fetchCoins(): Promise<AxiosResponse> {
  return await AxiosInstance.get('/coins/list?include_platform=true')
    .then((response) => {
      console.log(['Coin List', response]);
      return response;
    })
}