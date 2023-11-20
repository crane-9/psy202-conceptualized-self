<script lang="ts">
    import type { PageData } from "./$types";

    import { FloatingExamples } from "$lib";

    export let data: PageData;
    let hasUsername = data.username !== undefined;
</script>

<section class="highlight thin">
    <h2>Summary</h2>

    <p>The conceptualized self is, simply put, <b>the image of ourselves we keep in our mind</b>. We may see ourselves positively or negatively; we may feel pride in ourselves, or shame in ourselves; we may over or underestimate ourselves. </p>
    
    <p>How we see ourselves <b>matters</b>, as it has been shown to relate to symptoms of depression and anxiety. The goal of Acceptance and Commitment Therapy is to become more flexible in how we see ourselves, and to make our happiness less reliant on self-perception.</p>
</section>

<div class="flex-row align-center thin padded">
    <i class="fa-solid fa-person-cane"></i>
    <i class="fa-solid fa-person-walking"></i>
    <i class="fa-solid fa-person-half-dress"></i>
</div>

<section class="padded thin align-center">
    <p>At the beginning of this lesson, you { hasUsername ? 'described' : 'had the option to describe'} yourself with a selection of traits. This is the first part of a Johari window exercise: an exercise built to explore our relationship to ourselves and others.</p>
    
    <p>After selecting and submitting your traits, you may { hasUsername ? 'have shared' : ' share' } a link with friends, which would allow them to make their own selection of traits that would describe you.</p>
    
    <p>The goal of this exercise is a practice of psychological flexibility: the way you see yourself may not be the way others see you; the way you see others may not be the way they see themselves. Accepting how others see you not only practices psychological flexibility, but helps you to understand yourself and your identity. ACT, similarly, encourages these positive life skills.</p>

    <FloatingExamples>
        {#if hasUsername == true}
            <a class="nice-button swell" href="/window/{data.username}/view">Click here to view your window.</a>
        {:else}
            <a class="nice-button swell" href="/window">Click here to make a window.</a>
            <a href="/johari">Or, click here to learn more about the Johari activity.</a>
        {/if}
    </FloatingExamples>
</section>
