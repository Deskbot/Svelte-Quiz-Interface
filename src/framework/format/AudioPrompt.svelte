<script context="module">
    let current;
</script>

<script>
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

<audio
    controls
    on:play={stopOthers}
    src={path}
    bind:paused
    bind:this={audio}
/>
