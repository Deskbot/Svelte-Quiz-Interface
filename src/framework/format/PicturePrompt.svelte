<script>
    export let picturePath;
    export let qNum;
    export let roundName;
</script>

<style>
    img {
        max-height: 300px;
        width: 300px;
    }
</style>

<img src={picturePath} alt={`${roundName} Round. Question ${qNum}.`}/>
