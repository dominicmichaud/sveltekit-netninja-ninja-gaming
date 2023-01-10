<script>
    export let data;
    const { posts } = data;
</script>

<section class="section">
    <div class="container is-fluid">
        <h1 class="title has-text-primary">Games</h1>        
        <p class="subtitle has-text-primary">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi sint numquam quas magni vero suscipit laboriosam repudiandae fugiat corporis molestiae, odio cum nam neque praesentium! Nulla esse soluta repellendus, corrupti earum aliquam explicabo ea fugit quod commodi omnis sed amet aliquid delectus ducimus maiores dolore recusandae vitae a repellat. Praesentium, debitis voluptatibus sint illum corporis ipsam aliquam maxime voluptates tempora.
        </p>

        <div class="columns is-multiline mt-6">
            {#if !data}
                <p>Loading...</p>
            {:else}
                {#each posts as { id, title, body }}
                    <div class="column is-one-third">
                        <div class="card">
                            <a href={`/games/${id}`}>
                                <div class="card-image">
                                    <figure class="image is-2by1">
                                        <img src={`https://picsum.photos/300/200?random=${id}`} alt={title}>
                                    </figure>
                                </div>                            
                                <div class="card-content">
                                    <div class="content">
                                        <h2>{title}</h2>
                                        {body}
                                    </div>
                                </div>                            
                            </a>
                        </div>
                    </div>
                {/each}
            {/if}
        </div>
    </div>     
</section>