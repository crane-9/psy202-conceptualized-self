<!--
    Results Johari window. Has some minor statistics.
-->

<script lang="ts">
    import type { types } from "$lib";
    
    import { utils, words } from "$lib";
    import { countAppearances } from "./utils";

    export let data: types.UserData;

    // Caluclate helper values.
    let reviewCount = data.reviews.length;

    // Combine all reviews.
    let reviewsCombined = utils.combineArrays(...data.reviews);

    // Build lists to populate.
    let arena: number[] = [];
    let blindSpot: number[] = [];
    let facade: number[] = [];
    let others: number[] = [];

    // Sort
    for (let i = 0; i < words.length; i++) {
        let isPerceived = Number(reviewsCombined.includes(i));
        let isSelf = Number(data.descriptors.includes(i));
        
        // Simplistic if/elses.
        if (isPerceived && isSelf) {
            arena.push(i);
        } else if (isPerceived) {
            blindSpot.push(i);
        } else if (isSelf) {
            facade.push(i);
        } else {
            others.push(i);
        }
    }
</script>

<style>
    table {
        /* fashion */
        border-spacing: 1ex;
        text-align: center;

        /* layout */
        margin: auto;
        width: 50%;
    }

    th {
        text-transform: capitalize;
    }

    td {
        border-radius: 3px;
        padding: 1ex;
        vertical-align: top;
    }

    #q-1 {
        background-color: var(--accent-1);
        color: var(--primary-0);
    }
    
    #q-2 {
        background-color: var(--primary-2);
        color: var(--primary-6);
    }
    
    #q-3 {
        background-color: var(--accent-3);
        color: var(--primary-1);
    }
    
    #q-4 {
        background-color: var(--primary-4);
        color: var(--primary-1);
    }

    td div {
        align-items: center;
        display: flex;
        gap: 1em 1.5em;
        flex-flow: row wrap;
        justify-content: center;
        padding: 1em;
    }

    td::before {
        /* fashion */
        opacity: 0.5;
        text-align: center;
        text-transform: capitalize;
        width: fit-content;

        /* layout */
        display: block;
        margin: auto;
    }

    #q-1::before {
        content: "arena";
    }
    #q-2::before {
        content: "blind spot";
    }
    #q-3::before {
        content: "conceptualized self";
    }
    #q-4::before {
        content: "unknown";
    }

    div.v-scroll-box {
        margin: 1em auto;
    }
    
    ul {
        margin: 0 1em;
    }

    @media (max-width: 900px){
        table {
            overflow-y: auto;
            height: 500px;
            width: fit-content;
        }

        th:only-of-type {
            rotate: 180deg;
            text-orientation: unset;
            writing-mode: vertical-lr;
        }

        tr {
            height: fit-content;
            width: fit-content;
        }
    }
</style>

<!-- In Svelte: could be written a bit more elegantly, but this works. -->

<table>
    <tr>
        <th></th>
        <th>known to self</th>
        <th>unknown to self</th>
    </tr>
    <tr>
        <th>known to others</th>
        <td id="q-1">
            <div>
                {#each arena as w}
                    <span>{words[w]}</span>
                {/each}
            </div>
        </td>
        <td id="q-2">
            <div>
                {#each blindSpot as w}
                    <span>{words[w]}</span>
                {/each}
            </div>
        </td>
    </tr>
    <tr>
        <th>unknown to others</th>
        <td id="q-3">
            <div>
                {#each facade as w}
                    <span>{words[w]}</span>
                {/each}
            </div>

        </td>
        <td id="q-4">
            <div>
                {#each others as word}
                    <span>{words[word]}</span>
                {/each}
            </div>
        </td>
    </tr>
</table>

{#if reviewCount > 1}
    <div class="v-scroll-box">
        <ul>
            {#each words as word, idx}
                {#if utils.countAppearances(idx, data.reviews) > 0}
                    <li>{utils.countAppearances(idx, data.reviews) / reviewCount * 100}% of people describe <b>{data.username}</b> as <b>{word}</b>.</li>
                {/if}
            {/each}
        </ul>
    </div>
{:else}
    <p>More stats become available once enough peers have submitted to this window.</p>
{/if}
