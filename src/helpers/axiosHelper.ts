import axios, { type AxiosInstance } from "axios";
import { API_URL } from "./env";

// useful for setting up axios setting, e.g. headers you want to send with every request
const client: AxiosInstance = axios.create({
    baseURL: API_URL,
});

type AxiosHelperProps = {
    url: `/${string}`;
    body?: Record<string, unknown>;
    method?: "POST" | "PUT" | "DELETE" | "PATCH" | "GET";
};

export default async function axiosHelper<TData>({
    url,
    body,
    method = "POST",
}: AxiosHelperProps): Promise<TData> {
    try {
        const { data } = await client.request<TData>({
            url,
            method,
            data: body,
        });

        return data;
    } catch (error) {
        return Promise.reject(error);
    }
}
