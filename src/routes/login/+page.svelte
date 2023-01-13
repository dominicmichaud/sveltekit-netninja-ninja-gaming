<script>
    import { enhance } from '$app/forms';
    import { user } from '$lib/stores/store';
    import { fly, fade } from "svelte/transition";
    import { elasticOut } from 'svelte/easing';
    import Fa from 'svelte-fa/src/fa.svelte'
    import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
    /**
	 * @type {{ email: any; email_missing: any; email_incorrect: any; email_message: any; password: any; pass_missing: any; pass_incorrect: any; pass_message: any; }}
	*/    
    export let form;
    let visible = true;
     
    // Form Progressive Enhancement function
    const handleEnhance = () => {
        // provide a SubmitFunction that runs immediately before the form is submitted
        // ActionResult callback        
        return async ({ result, update }) => {            
            if (result.type === 'success') {
                // If server returns success we update the Store with the User data
                const { data: { data: userData} } = result;
                const { name, username, email } = userData[0];
                user.update((u) => u = JSON.stringify({
                    name,
                    username,
                    email
                }));
                window.location.href = '/';
            }

            // `update` is a function which triggers the logic that 
            // would be triggered if this callback wasn't set
            update();
        }
    }    
</script>

<section class="section">
    <div class="container is-fluid">
        <div class="columns is-centered">
            <div class="column is-one-third">
                {#if visible}
                    <div class="card login-card">
                        <div class="card-content">
                            <h1 class="title has-text-primary">Login</h1>
                            
                            <div class="form-container mt-6">
                                <form method="post" action="?/login" use:enhance={handleEnhance}>
                                    <div class="field">
                                        <div class="control has-icons-left has-icons-right">
                                            <input class="input" name="email" type="email" placeholder="Email" value={form?.email ?? ''}>
                                            <span class="icon is-small is-left">
                                                <Fa icon={faEnvelope} size="lg" />
                                            </span>
                                        </div>
                                        {#if form?.email_missing || form?.email_incorrect}
                                            <p class="help is-danger">
                                                {form.email_message}
                                            </p>
                                        {/if}
                                    </div>
                                    <div class="field">
                                        <div class="control has-icons-left">
                                            <input class="input" name="password" type="password" placeholder="Password" value={form?.password ?? ''}>
                                            <span class="icon is-small is-left">
                                                <Fa icon={faLock} size="lg" />
                                            </span>
                                        </div>
                                        {#if form?.pass_missing || form?.pass_incorrect}
                                            <p class="help is-danger">
                                                {form.pass_message}
                                            </p>
                                        {/if}
                                    </div>
                                    <div class="field">
                                        <p class="control">
                                            <button class="button px-6">
                                                Login
                                            </button>
                                        </p>
                                    </div>                            
                                </form>
                            </div>
                        </div>
                    </div>
                {/if}
            </div>
        </div>
    </div>    
</section> 