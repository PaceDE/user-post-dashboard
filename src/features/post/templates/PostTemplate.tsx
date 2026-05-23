"use client";

import Divider from "@/shared/components/ui/divider";
import Text from "@/shared/components/ui/text";
import { useEffect, useMemo, useState } from "react";
import { usePostStore } from "../store/post.store";
import { FetchPosts, PostCardData } from "../types";
import PostCard from "../components/PostCard";
import Button from "@/shared/components/ui/button";
import Pagination from "@/shared/components/ui/pagination/Pagination";
import { useUserStore } from "@/features/user/store/user.store";
import UserCard from "@/features/user/components/UserCard";
import AddPostForm from "../components/AddPostForm";
import AddPostModal from "../components/AddPostModal";
import PostCardSkeleton from "../components/PostCardSkeleton";
import UserCardSkeleton from "@/features/user/components/UserCardSkeleton";

const ITEM_PER_PAGE = 5;

const PostTemplate = ({ id, postsData }: { id: number, postsData: FetchPosts }) => {
  const { posts, status:postStatus, setPosts } = usePostStore();
  const { users, status: userStatus, fetchUsers } = useUserStore();

  const postLoading = postStatus === "idle" || postStatus === "loading";
  const usersLoading = userStatus === "idle" || userStatus === "loading";

  const [page, setPage] = useState(1);
  const [modalOpen, setModalOpen] = useState(false);
  const toggleModal = (value: boolean) => {
    setModalOpen(value);
    if (value) document.body.classList.add('overflow-hidden')
    else document.body.classList.remove('overflow-hidden')
  }

  useEffect(() => {
    setPosts(postsData);
    if(!user)
      fetchUsers();

  }, [postsData])

  const user = useMemo(() => {
    return users.find(user => user.id === Number(id))
  }, [id,users])

  const userPost = useMemo(() => {
    return posts.filter(post => post.userId == Number(id))
  }, [posts, id])

  const noOfPage = Math.max(1, Math.ceil(userPost.length / ITEM_PER_PAGE));

  const startIndex = ((page - 1) * ITEM_PER_PAGE);
  const endIndex = ((page - 1) * ITEM_PER_PAGE) + ITEM_PER_PAGE - 1;


  const filteredPost = useMemo(() => {
    return userPost.slice(startIndex, endIndex + 1)

  }, [userPost, startIndex, endIndex])

  return (
    <section className="flex flex-col gap-6">


      {usersLoading ? (
        <UserCardSkeleton length={1} />
      ) : (
        !!user && (
          <div className="flex items-center gap-4 bg-bg-base/50 rounded-2xl p-6 border border-border-default">
            <UserCard userData={user} postPage={true} />
            <div className="flex flex-col gap-1 border-l border-border-default pl-6">
              <Text variant="title" customStyle="text-fg-secondary">
                Post Activity
              </Text>
              <Text customStyle="text-fg-muted text-[14px]">
                {userPost.length} posts total · page {page} of {noOfPage}
              </Text>
            </div>
          </div>
        )
      )}


      {/* Posts */}
      <div className="flex flex-col gap-3">
        <div className="flex gap-3">
          <Text variant="title" customStyle="text-[clamp(1.2rem,2vw,1.5rem)]">
            Post lists
          </Text>
          <Button onClick={() => toggleModal(true)}>
            Add Post
          </Button>
        </div>
        <Divider />
        {postLoading ? (
          <PostCardSkeleton />
        ) : (
          <div className="flex flex-col gap-2">
            {filteredPost.map((post, idx) => (
              <PostCard key={post.id} number={startIndex + idx + 1} postData={post} />
            ))}
          </div>
        )}

      </div>

      <Pagination noOfPage={noOfPage} page={page} setPage={setPage} />

      {modalOpen && (
        <AddPostModal userId={id} setModalOpen={toggleModal} />
      )}

    </section>
  )
}

export default PostTemplate;
