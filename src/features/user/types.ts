export interface User  {
    id: number,
    name: string,
    username:  string,
    email: string,
    address: {
      street: string,
      suite: string,
      city: string,
      zipcode: string,
      geo: {
        lat: string,
        lng:string
      }
    },
    phone: string,
    website: string,
    company: {
      name: string,
      catchPhrase: string,
      bs: string
    }
}

export type FetchUsers = User[]

export interface UserCardData{
        id:number
        name:string;
        email:string;
        company:string
}

export type StatusVariant = "idle" | "loading" | "success" | "error"

export interface UserStore {
  users: UserCardData[]
  search: string

  status: StatusVariant

  setUsers: (users: UserCardData[]) => void
  setSearch: (search: string) => void
  setStatus: (status: StatusVariant) => void
  fetchUsers: () => void
}
