<!-- 
    Johari word grid. Only the word grid interface.
-->

<script lang="ts">    
    import { utils, words } from "$lib";

    // ID for the input box to keep the words in.
    export let inputID: string;

    
    // Add the given words' index to the input list.
    function addID(wordID: number): void {
        // Get input box.
        let inputBox = document.getElementById(inputID) as HTMLInputElement;

        // Value with separator on both sides to prevent inaccuracies.
        let val = ` ${wordID},`

        // Check button style.
        const activeClass = "selected";
        let btn = document.getElementById(`word-${wordID}`);
        
        // Simple switch. Add/remove style and value.
        if (btn?.classList.contains(activeClass)) {
            btn.classList.remove(activeClass);
            inputBox.value = inputBox.value.replace(val, "");
        } else {
            btn?.classList.add(activeClass);
            inputBox.value += val;
        }
    }
</script>

<style>
    div.box {
        /* fashion */
        color: var(--primary-1);
        
        /* layout */
        display: grid;
        gap: 2px;
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
        margin: 1em auto 0;
        width: 50%;
    }

    button.word {
        /* fashion */
        background-color: var(--primary-5);
        border-radius: 3px;
        color: inherit;
        font-family: var(--heading-font);
        text-align: center;
        padding: 1ex;

        /* button indication */
        user-select: none;
        cursor: pointer;
    }

    button.word:hover {
        background-color: var(--primary-4);
    }

    @media (max-width: 900px) {
        div.box {
            margin: 1em 0;
            width: 100%;
        }
    }

    @media (max-width: 500px) {
        div.box {
            grid-template-columns: 1fr 1fr 1fr;
        }
    }
</style>

<div class="box">
    {#each words as word, idx}
        <button class="swell word" on:click={utils.eventCall(utils.functionWithArg(addID, idx))} id=word-{idx}>{word}</button>
    {/each}
</div>

