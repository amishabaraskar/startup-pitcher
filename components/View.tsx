import Ping from "@/components/Ping";
import { client } from "@/sanity/lib/client";
import { GET_VIEWS_QUERY } from "@/sanity/lib/query";
import {writeClient} from "@/sanity/lib/write";
import { unstable_after as after } from "next/server";

const View = async ({ id }: { id: string }) => {
    const { views: totalViews } = await client
        .withConfig({ useCdn: false })
        .fetch(GET_VIEWS_QUERY, { id });
// await writeClient.patch(id).set({views:totalViews+1}).commit()
    after(
        async () =>
            await writeClient
                .patch(id)
                .set({ views: totalViews + 1 })
                .commit(),
    );

    return (
        <div className="view-container">
            <div className="absolute -top-2 -right-2">
                <Ping />
            </div>

            <p className="view-text">
                <span className="font-black">Views: {totalViews}</span>
            </p>
        </div>
    );
};
export default View;