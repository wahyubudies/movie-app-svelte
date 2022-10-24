export async function load({ fetch, params }) {
    const searchedMovies = async function () {
        const API_URI = `https://api.themoviedb.org/3/search/movie?api_key=b6db57769c00dd7dd37ba75e3b6e3bac&language=en-US&page=1&include_adult=false&query=${params.id}`

        const reply = await fetch(API_URI)
        const data = await reply.json()
        return data.results
    }

    return {
        searchedMovies: searchedMovies()
    }
}