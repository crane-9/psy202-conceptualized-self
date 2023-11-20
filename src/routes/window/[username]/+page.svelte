<script lang="ts">
	import type { PageData, ActionData } from './$types';

    import { enhance, applyAction } from '$app/forms';
    import { goto } from '$app/navigation';
    import { JohariGrid } from '$lib';

    export let data: PageData;
    export let form: ActionData;

    let username = data?.username;
</script>

<svelte:head>
    <meta property="description" content="Pick 5 words to describe {username}.">

    <title>{username}'s Johari Window</title>
</svelte:head>

<p><strong>{username}</strong> has described themself using a handful of the traits below, and now you may select <strong>up to five</strong> traits you would use to describe them.</p>

<JohariGrid inputID="descriptors"/>

<form 
    method="POST" 
    use:enhance={({  }) => {
        // Where `result` is an `ActionResult`
        return async ({ result }) => {
            if (result.type === 'redirect') {
				goto(result.location);
			} else {
				await applyAction(result);
			}
        }
    }}
>
    {#if form?.tooMany}<p class="error">Too many traits selected! Please only select up to 5.</p>{/if}
    {#if form?.missingDescriptors}<p class="error">You didn't select any traits! Try again.</p>{/if}

    <input type="text" name="descriptors" id="descriptors" readonly hidden>
    <input type="text" name="username" id="username" readonly hidden value={username}>
    <input type="submit" value="Submit to {username}'s window" class="swell">
</form>

<p>Or, you can skip to <strong>{username}</strong>'s results <a href="/window/{username}/view">here</a>!</p>
