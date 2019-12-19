<script context="module">
    let current;
</script>

<script>
    // code largely copied from https://svelte.dev/tutorial/sharing-code

    export let path;

    let audio;
    let paused = true;

    function stopOthers() {
		if (current && current !== audio) current.pause();
		current = audio;
	}
</script>

<audio
    controls
    bind:paused
    on:play={stopOthers}
    src={path}
/>

