export async function load({ fetch, params }) {
    const movieDetail = async function () {
        const API_URI = `https://api.themoviedb.org/3/movie/${params.id}?api_key=b6db57769c00dd7dd37ba75e3b6e3bac&language=en-US`
        const reply = await fetch(API_URI)
        const data = await reply.json()
        return data
    }

    return {
        movieDetail: movieDetail()
    }

}