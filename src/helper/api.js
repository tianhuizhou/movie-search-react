const API_URL = `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}`

async function getMovies(query, type) {
    const url = `${API_URL}&${type === 'id' ? 'i' : 's'}=${query}`
    const movies = await fetch(url)
    try {
        return movies.json()
    } catch (err) {
        console.error(err)
        return []
    }
}

export default {
    getMovies
}