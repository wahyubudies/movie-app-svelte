<script>
    export let data;
</script>

<div class="movie-details">
    <div class="img-container">
        <img
            src={`https://image.tmdb.org/t/p/original${data.movieDetail.backdrop_path}`}
            alt={data.movieDetail.title}
        />
    </div>
    <div class="txt-container">
        <h1>{data.movieDetail.title}</h1>
        <p class="overview">{data.movieDetail.overview}</p>
        <p>
            <span>Release Date:</span>
            {data.movieDetail.release_date} <br />
            <span>Budget:</span>
            {data.movieDetail.budget} <br />
            <span>Rating:</span>
            {data.movieDetail.vote_average} <br />
            <span>Runtime:</span>
            {data.movieDetail.runtime} mins <br />
        </p>
    </div>
</div>

<style>
    h1 {
        padding: 1rem 0rem 2rem;
    }

    p {
        padding: 1rem 0rem;
    }

    .img-container {
        width: 100%;
    }

    img {
        width: 100%;
        border-radius: 1rem;
    }

    .movie-details {
        margin: 2rem 20%;
    }

    span {
        font-weight: bold;
    }
</style>
