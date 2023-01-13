<script>
    import { page } from '$app/stores';
</script>

<section class="section">
    <div class="container is-fluid">
        {#if $page.error}
            <h1 class="title has-text-primary">{$page.status}</h1>        
            <p class="subtitle has-text-primary">
                {$page.error.message}
            </p>
        {/if}        
    </div>    
</section>