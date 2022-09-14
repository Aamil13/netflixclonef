const key ='345e584a0fa280ca5fe6d5c83be3a520'

const request = {
    requestPopular : `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`,
    requestTopRated : `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US&page=1`,
    requestUpcoming : `https://api.themoviedb.org/3/movie/upcoming?api_key=${key}&language=en-US&page=1`,
    requestTrending : `https://api.themoviedb.org/3/trending/all/day?api_key=${key}`,

}

export default request;