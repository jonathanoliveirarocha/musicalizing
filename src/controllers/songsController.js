const songsService = require("../services/songs.service");
require("dotenv").config();

const songsController = {
  getNotes: (req, res) => {
    res.render("notes");
  },

  getSong: async (req, res) => {
    const genre = req.params.genre.toLowerCase();
    try {
      const song = await songsService.getSong(genre, process.env.SONGS_ID);

      if (song === null) {
        return res.status(404).json({ error: "Genre not registered!" });
      } else {
        return res.send(song);
      }
    } catch {
      return res.status(500).send({ message: "An internal error has occurred!" });
    }
  },
};

module.exports = songsController;
