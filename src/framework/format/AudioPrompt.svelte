<script context="module">
    let current;
</script>

<script>
    export let caveat;
    export let path;

    let audio;
    let paused = true;

    // method copied from https://svelte.dev/tutorial/sharing-code
    function stopOthers() {
		if (current && current !== audio) {
            current.pause();
        }
		current = audio;
    }
</script>

{#if caveat !== undefined}
    <span>{caveat}</span>
{/if}
<audio
    controls
    on:play={stopOthers}
    src={path}
    bind:paused
    bind:this={audio}
/>
