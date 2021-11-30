const apiConfig = {
  baseUrl: "https://api.themoviedb.org/3/",
  apiKey: "195bd241744413675e123802dcc2a481",
  originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
  w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`,
};

export default apiConfig;
