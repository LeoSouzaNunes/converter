import axios, { type AxiosInstance } from "axios";
import { API_URL } from "./env";

const client: AxiosInstance = axios.create({
    baseURL: API_URL,
});

type FetcherProps = {
    url: string;
    params?: Record<string, string>;
};

// This function is used by SWR to fetch data from the server, once we have the API defined we'll use this function to fetch through a hook
// letting SWR handle the caching and revalidation (very customizable).
// Useful performance optimization, as it will only fetch the data if it's not already in the cache (this depends on how you want your project to work).
export default async function fetcher<TData>({
    url,
    params = {},
}: FetcherProps): Promise<TData> {
    try {
        const { data } = await client.get<TData>(url, {
            params,
        });

        return data;
    } catch (error) {
        return Promise.reject(error);
    }
}
