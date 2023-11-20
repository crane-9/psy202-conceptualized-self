<svelte:head>
    <meta property="description" content="Describe yourself in 5 words.">
    
    <title>Johari Window</title>
</svelte:head>

<script lang="ts">
    import type { ActionData } from './$types';

    import { enhance, applyAction } from '$app/forms';
    import { goto } from '$app/navigation';
    import { page } from '$app/stores';  
    import { JohariGrid } from "$lib";

    export let form: ActionData;

    let baseURL = $page.url.href.split("?")[0];

    // If the page intends to direct to lesson.
    let lessonFwd = $page.url.searchParams.get('fwd') !== null;
</script>

<p>From the grid below, select <b>up to five</b> words you would use to describe yourself.</p>
<p>After hitting submit, if you so choose, you will be given a link to send to friends and family, that will allow them to share which words <em>they</em> would pick to describe <em>you</em>.</p>

<JohariGrid inputID="descriptors" />

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
    <!-- Error messages. -->
    {#if form?.tooMany}<p class="error">Too many traits selected! Please only select up to 5.</p>{/if}
    {#if form?.invalidUsername}<p class="error">Username invalid! Try removing special characters, or shortening your username.</p>{/if}
    {#if form?.userTaken}<p class="error">Username has been taken! Try something else.</p>{/if}
    {#if form?.missingDescriptors}<p class="error">You didn't select any traits! Try again.</p>{/if}

    <input type="text" name="descriptors" id="descriptors" readonly hidden>
    <label for="username">Enter a unique nickname: <input type="text" name="username" id="username" required></label>

    <input class="swell" type="submit" value="Submit">

    <!-- Success. -->
    {#if form?.success}
        <p class="success">Response submitted!</p>
        <p>Share this link to friends and ask them to describe you:</p>
        <a href={baseURL + "/" + form.username + "/view"}>{baseURL + "/" + form.username + "/view"}</a>
    {/if}

    <!-- Pointer to lesson. -->
    {#if lessonFwd}
        <a href="/lesson/">
            {#if form?.success}
                Continue
            {:else}
                Skip and continue to information.
            {/if}
        </a>
    {/if}

</form>

