<!-- 
    Basis for this component taken from:
    https://svelte.dev/examples/modal
-->
<script lang="ts">
	import { showModal } from "$lib";

	let dialog: HTMLDialogElement;

	$: if (dialog && $showModal) { dialog.showModal(); };
</script>

<style>
	dialog {
        /* fashion */
		background-color: var(--primary-0);
		border-radius: 3px;
		border: none;

        /* layout */
		padding: 0;
        position: fixed;
        width: 50%;
        z-index: 10;
	}

	dialog::backdrop {
		background: rgba(0, 0, 0, 0.3);
	}
    
	dialog > div {
		padding: 1em;
	}

	dialog[open] {
		animation: zoom 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
	}
	
	dialog[open]::backdrop {
		animation: fade 0.2s ease-out;
	}

	button {
        display: block;
        margin: auto;
    }

	@media (max-width: 900px) {
		dialog {
			width: 90%;
		}
	}

	@keyframes zoom {
		from {
			transform: scale(0.95);
		}
		to {
			transform: scale(1);
		}
	}

	@keyframes fade {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}
</style>


<!-- svelte-ignore a11y-click-events-have-key-events a11y-no-noninteractive-element-interactions -->
<dialog
	bind:this={dialog}
	on:close={() => ($showModal = false)}
	on:click|self={() => dialog.close()}
    class="align-center"
>

	<!-- svelte-ignore a11y-no-static-element-interactions -->
	<div on:click|stopPropagation>
		<slot name="title" />

		<hr />

		<slot />

		<hr />
		<!-- svelte-ignore a11y-autofocus -->
		<button autofocus on:click={() => dialog.close()} class="nice-button swell">Close</button>
	</div>

</dialog>
