<script>
    export let movie;

    const src = movie.poster_path
        ? `https://image.tmdb.org/t/p/original${movie.poster_path}`
        : "https://dummyimage.com/500x750/9c9c9c/ffffff.png";
</script>

<div class="movie-card">
    <a href={`/movie/${movie.id}`}>
        <img {src} alt={movie.title} />
    </a>
    <div class="description">
        <h2>{movie.title}</h2>
        <p>{movie.release_date}</p>
    </div>
</div>

<style>
    img {
        width: 100%;
        object-fit: cover;
        border-radius: 1rem;
        margin-bottom: 1rem;
    }

    h2 {
        font-size: 0.9rem;
    }

    p {
        font-size: 0.7rem;
    }

    .movie-card {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        padding: 1rem;
    }
</style>
