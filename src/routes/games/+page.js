/**
 * 
 * @param {*} fetch
 * @returns 
 */
/* export const load = async ({ fetch }) => {
    const fetchPosts = async () => {
        let postsData;
        const postsRes = await fetch('https://jsonplaceholder.typicode.com/posts?_page=0&_limit=10');        

        if (postsRes.ok) {
            postsData = await postsRes.json();
        } else {
            postsData = false;
        }
        
        return postsData;
    }
    
    return { 
        posts: fetchPosts()
     };
} */

import { games_data } from "$lib/data/games_data";

export const load = async () => {    
    return { 
        posts: games_data
    };
}