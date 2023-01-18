<script>
    import { error } from '@sveltejs/kit';
    import { fly } from 'svelte/transition';
    let show_details = true;
    let show_art = false;
    export let data;

    // Get single Game data from server
    const { post } = data;
        
    if (!post) {
        throw error(404, {
          message: 'Game Not found'
        });
    }

    // Destructure object
    const { name, description, platform, release_date, developers, publishers, genres, max_players, image_id } = post;

    // Handle tab click
    const handleClick = (/** @type {string} */ target) => {
        if (target === 'game-details') {
            if (!show_details) {
                show_art = false;
            }
        } else {
            if (!show_art) {
                show_details = false;
            }
        }        
    }

    // Handle animation End Event
    const handleOutro = (/** @type {string} */ target) => {
        if (target === 'game-details') {
            show_art = true;
        } else {
            show_details = true;
        }        
    }
</script>

<section class="section game-details">
    <div class="container is-fluid">
        <h1 class="title has-text-primary is-size-2">
            {name}
        </h1>        
        <div class="columns">
            <div class="column">                
                <div class="tabs">
                    <ul>
                        <li class={show_details ? 'is-active' : ''}>
                            <a href="#details" on:click|preventDefault={() => handleClick('game-details')}>Details</a>
                        </li>
                        <li class={show_art ? 'is-active' : ''}>
                            <a href="#art" on:click|preventDefault={() => handleClick('game-art')}>Box Art</a>
                        </li>
                    </ul>
                </div>
                <div id="tab-content">
                    {#if show_details}
                        <div id="game-details" class="tab-item" transition:fly="{{ x: 25, delay: 300 }}" on:outroend="{() => handleOutro('game-details')}">
                            <div class="column is-two-thirds">
                                <div class="card">
                                    <div class="card-content p-6">
                                        <div class="columns is-multiline">
                                            <div class="column is-two-thirds pb-0 pt-0">
                                                <h2>Description</h2>
                                                <p>{description}</p>
                                                <h2>Platform</h2>
                                                <p>{platform}</p>
                                                <h2>Release Date</h2>
                                                <p>{release_date}</p>
                                            </div>
                                            <div class="column pt-0">
                                                <h2>Developers</h2>
                                                <p>{developers}</p>
                                                <h2>Publishers</h2>
                                                <p>{publishers}</p>
                                                <h2>Genres</h2>
                                                <p>{genres.join(', ')}</p>
                                                <h2>Max players</h2>
                                                <p>{max_players}</p>
                                            </div>                               
                                        </div>
                                        <p class="is-size-7 credit">
                                            [Credit: <a href="https://gamesdb.launchbox-app.com">GamesDB Launchbox App</a>]
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    {/if}
                    {#if show_art }                        
                        <div id="game-art" class="tab-item" transition:fly="{{ x: 25, delay: 300 }}" on:outroend="{() => handleOutro('game-art')}">
                            <img src={`/${image_id}.png`} alt={name}>
                        </div>
                    {/if}
                </div>                
            </div>            
        </div>                
    </div>    
</section>