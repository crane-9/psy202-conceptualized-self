<script lang="ts">
    import { JohariWindow, type types } from '$lib';

    export let data: types.UserData;

    let username = data?.username;
</script>

<svelte:head>
    <meta property="description" content="See how people describe {username}.">

    <title>{username}'s Johari Window</title>
</svelte:head>

<h2>{username}'s Johari window</h2>

<JohariWindow data={data}/>

<p>If you haven't yet, you can describe <strong>{username}</strong> <a href="/window/{username}">here</a>! You can also create your own window <a href="/window">here</a>.</p>
