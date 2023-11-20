<script lang="ts">
	import { page } from '$app/stores';
</script>

<svelte:head>
    <title>{$page.status} Error</title>
</svelte:head>

<div class="center-flex">
    <h1>{$page.status} Error</h1>
    
    <p class="error">{$page.error?.message}</p>
    
    <a href="/">Return home.</a>
</div>