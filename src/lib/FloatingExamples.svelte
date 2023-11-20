<style>
    div {
        color: var(--accent-3);
        gap: 1em;
        flex-flow: row wrap;
        font-weight: 500;
        font-family: var(--heading-font);
        margin: 2em;
    }

    div > * {
        width: min-content;
    }

    @media (max-width: 900px) {
        div {
            flex-flow: column nowrap;
            margin: 2em 0;
        }
    }
</style>

<div class="center-flex align-center">
    <slot></slot>
</div>