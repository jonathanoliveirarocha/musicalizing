const Songs = require("../models/Songs");

const songsService = {
  getSong: async (genre, ID) => {
    const songs = await Songs.findById(ID);
    const song = songs[genre][Math.floor(Math.random() * 3)];
    return song;
  },
};

module.exports = songsService;
