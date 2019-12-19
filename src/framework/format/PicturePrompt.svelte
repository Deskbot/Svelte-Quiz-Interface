<script>
    export let picturePath;
    export let qNum;
    export let roundName;
</script>

<style>
    img {
        max-height: 20rem;
        width: 20rem;
    }
</style>

<img src={picturePath} alt={`${roundName} Round. Question ${qNum}.`}/>
