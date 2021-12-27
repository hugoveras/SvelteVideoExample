<script>
    import ViewAttachmentsModal from "components/Modals/ViewAttachmentsModal.svelte";


    let showViewAttachment = false;
    const handleToggleModalButton = () => {
        showViewAttachment = !showViewAttachment;
    };
;
</script>
{#if showViewAttachment}
     <ViewAttachmentsModal
    on:close={() => handleToggleModalButton()}  />
{/if}
<button on:click={handleToggleModalButton} class="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full bg-blueGray-700">
  <i class="w-5 mr-1 fa fa-cloud-upload-alt" />
</button>