<script>
    import { error } from '@sveltejs/kit';
    import { handleCardMouseMove, handleCardMouseLeave } from '$lib/js/card-tilt.js';
    
    /**
	 * @type {{ posts: any; }}
	 */
    export let data;
    
    // Get all Games from Server
    const { posts } = data;

    if (!posts) {
        throw error(404, {
          message: 'Games Not found'
        });
    }
    
    // Destructure object
    const { games, credit } = posts;    
</script>

<section class="section games-list">
    <div class="container is-fluid">
        <div class="columns">
            <div class="column is-half">
                <h1 class="title has-text-primary">NES Games</h1>
                <p class="subtitle has-text-primary">
                    The Nintendo Entertainment System (NES) is an 8-bit third-generation home video game console produced by Nintendo. It was first released in Japan in 1983 as the Family Computer (FC), commonly known as the Famicom. The NES, a redesigned version, was released in American test markets on October 18, 1985, before becoming widely available in North America and other countries.
                </p>
                <span class="is-size-7 has-text-primary">
                    [Credit: <a href="https://en.wikipedia.org/wiki/Nintendo_Entertainment_System">Wikipedia</a>]
                </span>
                <span class="is-size-7 has-text-primary">
                    [Credit: <a href={credit}}>GamesDB Launchbox App</a>]
                </span>
            </div>
        </div>        

        <div class="columns is-multiline mt-6">
            {#each games as { id, name, description, image_id }}
                <div class="column is-one-third">
                    <div class="card card-{id}" on:mousemove={(e) => handleCardMouseMove(e)} on:mouseleave={(e) => handleCardMouseLeave(e)}>
                        <a href={`/games/${id}`} data-sveltekit-preload-data>
                            <div class="card-image">
                                <figure class="image">
                                    <img src={`/${image_id}.png`} alt={name}>
                                </figure>
                            </div>                            
                            <div class="card-content">
                                <div class="content">
                                    <div class="title-wrapper mb-2">
                                        <h2>{name}</h2>
                                        <div class="view-more">
                                            View Game
                                            <img src="/chevron-right-small-svgrepo-com.svg" alt="carret">
                                        </div>
                                    </div>
                                    {description.slice(0, 250) + '...'}
                                </div>
                            </div>                            
                        </a>
                    </div>
                </div>
            {/each}
        </div>
    </div>     
</section>