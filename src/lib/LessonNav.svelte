<!-- 
    This component navigates between different lesson pages.
-->

<script lang="ts">
    import { page } from '$app/stores';

    const firstPage = 1;
    const lastPage = 5;

    let currentPage: number;
    $: currentPage = Number($page.url.pathname.split("/")[2]);
</script>

<style>
    nav {
        /* layout */
        align-items: center;
        display: flex;
        gap: 3em;
        flex-flow: nowrap;
        justify-content: center;
        margin: 1em 0;
        text-align: center;
    }

    a {
        align-items: center;
        display: flex;
        justify-content: space-between;
        flex-flow: row nowrap;
        min-width: fit-content;
        width: 7%;
    }

    @media (max-width: 900px) {
        nav {
            justify-content: space-between;
            padding: 0 1em;
        }
    }
</style>

<nav>
    <!-- Previous button only appears if there is a previous page. -->
    {#if currentPage == firstPage || currentPage == lastPage}
        <span></span>
    {:else}
        <a href="/lesson/{currentPage - 1}" class="nice-button swell"><span>⟵</span> Previous</a>
    {/if}

    <!-- Next button onyl appears if there is a next page. -->
    {#if currentPage == lastPage}
        <span></span>
    {:else}
        <a href="/lesson/{currentPage + 1}" class="nice-button swell">Next <span>⟶</span></a>
    {/if}
</nav>
