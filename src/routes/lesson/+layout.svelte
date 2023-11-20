<svelte:head>
    <meta property="description" content="Learn about the strengths and weaknesses of the conceptualized self.">
    
    <title>Learn: The Conceptualized Self</title>
</svelte:head>

<script lang="ts">
    import { LessonNav, Modal, titleText, popupText } from "$lib";
</script>

<style>
    div {
        display: flex;
        flex-flow: column nowrap;
    }
</style>

<div>
    <slot></slot>
    <LessonNav />
</div>

<Modal>
    <h2 slot="title">{$titleText}</h2>
	<p>{@html $popupText}</p>
</Modal>

