import { games_data } from "$lib/data/games_data";

/**
 * 
 * @param {*} fetch
 * @returns 
 */
/* export const load = async ({ fetch, params }) => {
    const post_id = params.slug;

    const fetchPost = async () => {
        let postData;
        const postRes = await fetch(`https://jsonplaceholder.typicode.com/posts/${post_id}`);
        
        if (postRes.ok) {
            postData = await postRes.json();
        } else {
            postData = false;
        }

        return postData;
    }
    
    return { 
        post: fetchPost()
    };
} */

export const load = async ({ params }) => {
    const post_id = parseInt(params.slug);
    const single_post = games_data.games.find(el => el.id === post_id);
        
    return { 
        post: single_post
    };
}