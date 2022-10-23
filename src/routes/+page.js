const API_URI = `https://api.themoviedb.org/3/movie/popular?api_key=b6db57769c00dd7dd37ba75e3b6e3bac`

export async function load({ fetch }) {
    const reply = await fetch(API_URI)
    const data = await reply.json()

    if (reply.ok) {
        return {
            popular: data.results
        }
    }
}