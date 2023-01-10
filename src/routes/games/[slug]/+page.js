export const load = async ({ fetch, params }) => {
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
}