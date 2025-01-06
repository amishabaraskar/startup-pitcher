import SearchForm from "@/components/SearchForm";
import StartupCard, { StartupTypeCard } from "@/components/StartupCard";
import { sanityFetch, SanityLive } from "@/sanity/lib/live";
import { STARTUPS_QUERY } from "@/sanity/lib/query";

// export const revalidate = 0;
// export const dynamic = 'force-dynamic';
export default async function Home({
                                     searchParams,
                                   }: {
  searchParams: Promise<{ query?: string }>;
}) {
  const query = (await searchParams).query;
  const params = { search: query || null };



   const { data: posts } = await sanityFetch({ query: STARTUPS_QUERY ,params});
  console.log(posts.length)
// const posts=[
//     {
//         _createdAt: new Date(),
//         views:1,
//         author:{
//             id:1,
//             name:"Amisha",
//             image:"https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
//         },
//         title:"New startup",
//         category:"Education",
//         _id:1,
//         image:"https://images.unsplash.com/photo-1449034446853-66c86144b0ad?w=620&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
//         description:"New description",

// }]
  // const { data: posts } = await sanityFetch({ query: STARTUPS_QUERY, params });


  return (
      <>
        <section className="pink_container">
          <h1 className="heading">
            Pitch Your Startup, <br />
            Connect With Entrepreneurs
          </h1>

          <p className="sub-heading !max-w-3xl">
            Submit Ideas, Vote on Pitches, and Get Noticed in Virtual
            Competitions.
          </p>

          <SearchForm query={query} />
        </section>

        <section className="section_container">
          <p className="text-30-semibold">
            {query ? `Search results for "${query}"` : "All Startups"}
          </p>

          <ul className="mt-7 card_grid">
            {posts?.length > 0 ? (
                posts.map((post: StartupTypeCard) => (
                    <StartupCard key={post?._id} post={post} />
                ))
            ) : (
                <p className="no-results">No startups found</p>
            )}
          </ul>
        </section>
<SanityLive/>
      </>
  );
}