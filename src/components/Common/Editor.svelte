<script>
  import Editor from "cl-editor/src/Editor.svelte";

  export let html = "";
</script>

<Editor {html} on:change={(evt) => (html = evt.detail)} />
