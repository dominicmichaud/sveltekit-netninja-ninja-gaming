<script>
    export let data;
    const { posts } = data;
</script>

<div class="container-fluid">
    <h1>Games</h1>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi sint numquam quas magni vero suscipit laboriosam repudiandae fugiat corporis molestiae, odio cum nam neque praesentium! Nulla esse soluta repellendus, corrupti earum aliquam explicabo ea fugit quod commodi omnis sed amet aliquid delectus ducimus maiores dolore recusandae vitae a repellat. Praesentium, debitis voluptatibus sint illum corporis ipsam aliquam maxime voluptates tempora.</p>
    
    <ul class="grid-layout">
        {#if !data}
            <li>Loading...</li>
        {:else}
            {#each posts as { id, title, body }}
                <li class="item">
                    <a href={`/games/${id}`}>
                        <article>
                            <div class="card-header">
                                <img src={`https://picsum.photos/300/200?random=${id}`} alt={title}>
                            </div>
                            <div class="card-body">
                                <h2>{title}</h2>
                                <p>{body}</p>
                            </div>                                
                        </article>
                    </a>
                </li>
            {/each}
        {/if}        
    </ul>
</div>
