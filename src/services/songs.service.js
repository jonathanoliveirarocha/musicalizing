const Songs = require("../models/Songs");

const songsService = {
  getSong: async (genre, ID) => {
    const songs = await Songs.findById(ID);
    const genreSearch = songs[genre] ? songs[genre] : null;

    if (genreSearch !== null) {
      const song = genreSearch[Math.floor(Math.random() * 3)];
      return song;
    } else {
      return null;
    }
  },
};

module.exports = songsService;
