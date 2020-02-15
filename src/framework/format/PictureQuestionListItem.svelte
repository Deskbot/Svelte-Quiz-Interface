<style>
    div {
        display: flex;
        flex-direction: column;
        height: 100%;
        justify-content: space-between;
    }

    li {
        margin: 0 1rem 1rem 1rem;
        padding-left: 0.5rem;
    }
</style>

<li>
    <div>
        <slot/>
    </div>
</li>
