const PostCardSkeleton = () => {
  return (
    <div className="flex flex-col gap-2">

      {Array.from({ length: 5 }).map((_, idx) => (
        <div
          key={idx}
          className="flex flex-col items-start gap-3 bg-bg-base w-full px-4 py-3 rounded-xl border border-border-default"
        >

          <div className="h-6 w-20 rounded-xl bg-gray-200" />
          <div className="flex w-full flex-col gap-3 bg-bg-base px-4 py-3 rounded-xl border border-border-default">

            {/* Title */}
            <div className="h-5 w-1/2 rounded-md bg-gray-200" />

            {/* Body */}
            <div className="flex flex-col gap-2">
              <div className="h-4 w-full rounded-md bg-gray-200" />
              <div className="h-4 w-[90%] rounded-md bg-gray-200" />
              <div className="h-4 w-[75%] rounded-md bg-gray-200" />
            </div>

          </div>
        </div>
      ))}

    </div>
  )
}

export default PostCardSkeleton