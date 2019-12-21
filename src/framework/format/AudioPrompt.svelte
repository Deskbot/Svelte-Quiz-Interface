<script context="module">
    let allAudios = new Set();
    let current;
</script>

<script>
    import { onMount } from "svelte";

    export let caveat;
    export let path;

    let audio;
    let paused = true;

    onMount(() => {
        allAudios.add(audio);
        return () => allAudios.delete(audio);
    });

    function setOtherVolumes(volume) {
        for (const otherAudio of allAudios) {
            otherAudio.volume = volume;
        }
    }

    // method copied from https://svelte.dev/tutorial/sharing-code
    function stopOthers() {
		if (current && current !== audio) {
            current.pause();
        }
		current = audio;
    }
</script>

<style>
    audio {
        margin-bottom: 0.5rem;
        vertical-align: top;
        width: 100%;
    }

    span {
        display: inline-block;
    }
</style>

<audio
    controls
    on:play={stopOthers}
    on:volumechange={event => setOtherVolumes(event.target.volume)}
    src={path}
    bind:paused
    bind:this={audio}
/>
{#if caveat !== undefined}
    <span>{caveat}</span>
{/if}
