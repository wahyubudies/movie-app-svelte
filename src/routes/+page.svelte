<script>
    import PopularMovies from "../components/PopularMovies.svelte";
    import SearchInput from "../components/SearchInput.svelte";

    export let data;
</script>

<SearchInput />
<PopularMovies movies={data.popular} />
