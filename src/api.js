// const MOVIE_API_KEY = '8331a4cc'
// export const MOVIE_API_URL = `http://www.omdbapi.com/?apikey=${MOVIE_API_KEY}`
export const TV_API_URL = 'https://api.themoviedb.org/3/discover/tv?include_adult=false&include_null_first_air_dates=false&language=en-US&page=1&sort_by=popularity.desc';
export const MOVIE_API_URL = 'https://api.themoviedb.org/3';

export const options = {
  method: 'GET',
  params: {
    include_adult: false,
    include_video: false,
    language: 'en-US',
    page: 1,
    sort_by: 'popularity.desc',
  },
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxOTI2ZDBmZWZlYmU0YWUyOGY5OWFlZjgxNGRjMzRkMSIsIm5iZiI6MTc0NDU1NzMwMi42MjEsInN1YiI6IjY3ZmJkNGY2NzY1YzUyMjJmMzk5MjY4MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Fi62O4Lvi-2hsyE9UXsAjZhW3GzTvqj1VuoLjKdgrxo',
  }
};

export const TV_API_OPTIONS = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxOTI2ZDBmZWZlYmU0YWUyOGY5OWFlZjgxNGRjMzRkMSIsIm5iZiI6MTc0NDU1NzMwMi42MjEsInN1YiI6IjY3ZmJkNGY2NzY1YzUyMjJmMzk5MjY4MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Fi62O4Lvi-2hsyE9UXsAjZhW3GzTvqj1VuoLjKdgrxo'
  }
};
