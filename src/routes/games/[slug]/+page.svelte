<script>
    import { error } from '@sveltejs/kit';
    export let data;
    const { post } = data;
        
    if (!post) {
        throw error(404, {
          message: 'Game Not found'
        });
    }

    const { name, description } = post;
</script>

<section class="section">
    <div class="container is-fluid">
        <h1 class="title has-text-primary">
            {name}
        </h1>        
        <p class="subtitle has-text-primary">
            {description}
        </p>        
    </div>    
</section>