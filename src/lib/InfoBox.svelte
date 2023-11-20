<!-- 
    This component is a simple informational alert.
-->

<script lang="ts">
    export let faType = "fa-exclamation";
</script>

<style>
    aside {
        background-color: var(--accent-1-transparent);
        border-radius: 3px;
        flex: 1 0 auto;
        flex-flow: row nowrap;
        padding: 1em;
    }

    aside i {
        color: var(--accent-3);
        font-size: 2.5em;
        margin: 1rem;
    }

    @media (max-width: 900px) {
        aside {
            width: unset;
        }
    }
</style>

<aside class="center-flex align-center thin">
    <i class="fa-solid {faType}"></i>
    <slot></slot>
</aside>