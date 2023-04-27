import { AxiosResponse } from "axios";
import AxiosInstance from "./axiosInstance"

export async function fetchCoins(): Promise<AxiosResponse> {
  return await AxiosInstance.get('/coins/list?include_platform=true')
    .then((response) => {
      return response;
    })
}


export async function fetchCoinDetail(id: string): Promise<AxiosResponse> {
  return await AxiosInstance.get(`/coins/${id}?tickers=false&market_data=true&community_data=false&developer_data=true`)
    .then((response) => {
      return response;
    })
}