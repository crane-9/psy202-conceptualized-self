<!-- 
    This is an inline component. When a user hovers over it, a small popup should appear with a given definition. When a user clicks or taps on it, a larger popup will appear onscreen with the definition.
 -->
<script lang="ts">
    import { popupText, showModal, titleText } from "$lib";
   
   export let message: string;
   export let title: string = "definition";

   // Create callback to set message.
   function callback() {
      $showModal = true;
      $popupText = message;
      $titleText = title;
   }
</script>

<style>
   button {
      cursor:pointer;

      /* fashion */
      text-decoration: underline dashed var(--accent-2);
         
      /* blending */
      background-color: transparent;
      display: inline;
      font-family: var(--body-font);
      font-size: 1em;
      height: unset;
      padding: 0;
      width: unset;
   }

   button::after {
      content: " ?";
      color: var(--accent-2);
      font-size: 1.5ex;
      vertical-align: super;
   }
</style>

<button on:click={callback}>
   <slot></slot>
</button>