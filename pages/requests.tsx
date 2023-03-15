import RequestCard from "@/components/requests/RequestCard"
import Title from "@/components/titles/Title"
import React from "react"

const requests = () => {
    return (
        <main className="flex h-full flex-1 flex-col justify-center items-center md:p-10 p-2 md:py-20 bg-gray-200 dark:bg-gray-800 gap-y-10">
            <Title>My Requests</Title>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-8">
                {[1, 2, 3].map((data, i) => (
                    <RequestCard key={i} />
                ))}
            </div>
        </main>
    )
}

export default requests
