<script>
    import MovieCard from "./MovieCard.svelte";

    export let movies;
</script>

<p>Popular Movies</p>
<div class="popular-movies">
    {#each movies as movie}
        <MovieCard {movie} />
    {/each}
</div>

<style>
    p{
        padding-left: 1rem;
        font-weight: bold;
    }
    
    .popular-movies {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        grid-column-gap: 1rem;
        grid-row-gap: 2rem;
        height: 20vh;
    }
</style>
