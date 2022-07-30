import useSWR from "swr";
import api from "../Services/api";


export function useAxios(route){
    const {data, error, mutate} = useSWR(
        route, 
        async (url)=>{
            const response = await api.get(url)

            return response.data
        }
    )
  
    return {data,error, mutate}
}