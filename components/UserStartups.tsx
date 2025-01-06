import React from 'react'
import {STARTUPS_BY_AUTHOR_ID_QUERY} from "@/sanity/lib/query";
import StartupCard, {StartupTypeCard} from "@/components/StartupCard";
import {client} from "@/sanity/lib/client";

const UserStartups =async ({id}:{id:string}) => {
    const startups = await client.fetch(STARTUPS_BY_AUTHOR_ID_QUERY,{id})
    return (
<>
    {startups?.length > 0 ? startups.map((post:StartupTypeCard) => (
        <StartupCard post={post} key={post._id}/>
    )) : <p className="no-result">No posts yet</p>}
    </>    )
}
export default UserStartups
