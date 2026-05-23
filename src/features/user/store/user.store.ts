import { create } from "zustand"
import { UserCardData, UserStore } from "../types"
import { userApi } from "../api/user.api"

export const useUserStore = create<UserStore>((set,get) => ({
    users: [],
    search: "",

    status: "idle",
    error: null,

    setStatus: (status) => set({ status }),

    setUsers: (users) => (
        set({
            users,
            status: "success",
        })
    ),

    setSearch: (search) => set({ search }),

    fetchUsers: async () => {
     
        try {
            set({ status: "loading" })

            const data = await userApi.clientfetchUser()
            if(!data) throw new Error("Failed to fetch data");
            const users: UserCardData[] = data.map((user) => ({
                id: user.id,
                name: user.name,
                email: user.email,
                company: user.company.name
            }))
           
            
            set({users, status:"success"})
        } catch (err: any) {
            set({status: "error"})
        }
    },
}))