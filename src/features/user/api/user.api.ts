import { serverFetch } from "@/shared/lib/api/serverFetch";
import { FetchUsers } from "../types";
import { clientFetch } from "@/shared/lib/api/clientFetch";

export const userApi = {
    fetchUser: () =>
        serverFetch<FetchUsers>("/users", {
            next: { revalidate: 60 }
        }),
    clientfetchUser: () =>
        clientFetch<FetchUsers>("/users",{
            next: { revalidate: 60 }
        })
}