<script>
    export let picturePath;
    export let qNum;
    export let roundName;
</script>

<style>
    img {
        margin: 18px 0;
        max-height: 20rem;
        user-select: none;
        -moz-user-select: none;
        -webkit-user-select: none;
        -ms-user-select: none;
        width: 20rem;
    }
</style>

<img src={picturePath} alt={`${roundName} Round. Question ${qNum}.`}/>
