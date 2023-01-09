export const load = async ({ fetch }) => {

    const fetchPosts = async () => {
        const postsRes = await fetch('https://jsonplaceholder.typicode.com/posts?_page=0&_limit=10');
        const postsData = await postsRes.json();
        return postsData;
    }
    
    return { 
        posts: fetchPosts()
     };
}