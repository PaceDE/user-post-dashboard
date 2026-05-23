"use client";
import Divider from "@/shared/components/ui/divider";
import Text from "@/shared/components/ui/text";
import UserCard from "../components/UserCard";
import { UserCardData } from "../types";
import { colorPalette } from "@/shared/constants/colors";
import Button from "@/shared/components/ui/button";
import { useUserStore } from "../store/user.store";
import { useEffect, useMemo } from "react";
import UserCardSkeleton from "../components/UserCardSkeleton";

const UsersTemplate = ({ userData }: { userData: UserCardData[] }) => {
  const { users, status, search, setUsers, setSearch } = useUserStore();

  const isLoading = status === "loading" || status === "idle"

  useEffect(() => {
    setUsers(userData);
  }, [userData])

  const filteredUsers = useMemo(() => {
    if (search === "") return users;
    const query = search.toLowerCase()

    return users.filter((user) => {
      return (
        user.name.toLowerCase().includes(query) ||
        user.email.toLowerCase().includes(query)
      )
    })


  }, [users, search])

  return (
    <section>
      <div className="flex">

        <Text variant="heading" customStyle='text-[clamp(1.5rem,3vw,2rem)]'>User lists</Text>
      </div>

      <Divider />

      {isLoading ? (
        <UserCardSkeleton />
      ) : (
        <div className='p-2 grid lg:grid-cols-2 gap-x-2 gap-y-4'>
          {filteredUsers.map((user) => {
            return (
              <UserCard key={user.id} userData={user} />
            );
          })}
        </div>
      )}


      {/* Post */}
      <div>
        <Text variant="heading" customStyle='text-[clamp(1.5rem,3vw,2rem)]'>User lists</Text>

        <Divider />

        <div className='p-2 grid lg:grid-cols-2 gap-2'>
          {/* Post card */}
          <div className='flex flex-col items-start gap-2 bg-bg-base px-4 py-3 rounded-xl border border-border-default'>

            <Text component="span" customStyle="px-5 py-0.5 rounded-xl bg-bg-inverse text-fg-inverse font-10px]">Post 1</Text>

            <div className='flex flex-col justify-center'>
              <Text customStyle='text-[clamp(16px,2vw,18px)] text-fg-secondary'>
                Anajn
              </Text>

              <Text customStyle='text-[clamp(12px,2vw,14px)] text-fg-muted'>
                dfgdfg
              </Text>
            </div>
          </div>

          {/* Post card */}
          <div className='flex flex-col items-start gap-2 bg-bg-base px-4 py-3 rounded-xl border border-border-default'>

            <Text component="span" customStyle="px-5 py-0.5 rounded-xl bg-bg-inverse text-fg-inverse font-10px]">Post 1</Text>

            <div className='flex flex-col justify-center'>
              <Text customStyle='text-[clamp(16px,2vw,18px)] text-fg-secondary'>
                Anajn
              </Text>

              <Text customStyle='text-[clamp(12px,2vw,14px)] text-fg-muted'>
                dfgdfg
              </Text>
            </div>
          </div>

          {/* Post card */}
          <div className='flex flex-col items-start gap-2 bg-bg-base px-4 py-3 rounded-xl border border-border-default'>

            <Text component="span" customStyle="px-5 py-0.5 rounded-xl bg-bg-inverse text-fg-inverse font-10px]">Post 1</Text>

            <div className='flex flex-col justify-center'>
              <Text customStyle='text-[clamp(16px,2vw,18px)] text-fg-secondary'>
                Anajn
              </Text>

              <Text customStyle='text-[clamp(12px,2vw,14px)] text-fg-muted'>
                dfgdfg
              </Text>
            </div>
          </div>




        </div>
      </div>

    </section>
  )
}

export default UsersTemplate
