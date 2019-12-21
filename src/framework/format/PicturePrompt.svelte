<script>
    export let picturePath;
    export let qNum;
    export let roundName;
</script>

<style>
    img {
        margin-bottom: 0.5rem;
        max-height: 20rem;
        user-select: none;
        -moz-user-select: none;
        -webkit-user-select: none;
        -ms-user-select: none;
        vertical-align: top;
        width: 20rem;
    }
</style>

<img src={picturePath} alt={`${roundName} Round. Question ${qNum}.`}/>
