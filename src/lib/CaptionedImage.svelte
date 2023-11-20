<script lang="ts">
    export let src: string;
    export let alt: string;
    export let caption: string;
</script>

<style>
    div {
        margin: 0 auto;
        max-height: fit-content;
        max-width: fit-content;
    }

    img {
        display: block;
        max-height: 200px;
        max-width: 100%;
    }

    span {
        color: var(--primary-4);
        font-size: 1.5ex;
        text-align: right;
        align-self: flex-end;
    }

    @media (max-width: 900px) {
        div {
            max-height: unset;
            max-width: 95%;
        }
    }
</style>

<div class="center-flex">
    <img {src} {alt}>
    <span>{caption}</span>
</div>

