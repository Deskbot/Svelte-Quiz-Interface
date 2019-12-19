<script>
    export let picturePath;
    export let qNum;
    export let roundName;
</script>

<style>
    img {
        width: 300px;
    }
</style>

<img src={picturePath} alt={`${roundName} Round. Question ${qNum}.`}/>
