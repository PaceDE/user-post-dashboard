const UserCardSkeleton = ({ length = 6 }: { length?: number }) => {
    return (
        <div className="z-0 p-2 grid lg:grid-cols-2 gap-x-2 gap-y-4">

            {Array.from({ length: length }).map((_, idx) => (
                <div
                    key={idx}
                    className="max-w-250 flex flex-col gap-3 bg-bg-base w-full px-4 py-3 rounded-xl border border-border-default"
                >

                    {/* Header */}
                    <div className="flex gap-2 items-center">

                        {/* Avatar */}
                        <div className="w-12 h-12 rounded-full bg-gray-200" />

                        {/* Name + Email */}
                        <div className="flex flex-col gap-2 flex-1">
                            <div className="h-5 w-32 rounded-md bg-gray-200" />
                            <div className="h-4 w-48 rounded-md bg-gray-200" />
                        </div>
                    </div>

                    {/* Divider */}
                    <div className="h-px w-full bg-gray-200 relative bottom-2" />

                    {/* Company */}
                    <div className="flex gap-2 items-center">
                        <div className="w-4 h-4 rounded-sm bg-gray-200" />

                        <div className="h-4 w-40 rounded-md bg-gray-200" />
                    </div>

                    {/* Button */}
                    <div className="h-10 w-32 rounded-xl bg-gray-200 mt-1" />
                </div>
            ))}

        </div>
    )
}

export default UserCardSkeleton