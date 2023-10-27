const mongoose = require("mongoose");

const songsSchema = new mongoose.Schema({
  sertanejo: {
    type: Array,
  },
  mpb: {
    type: Array,
  },
  bossa_nova: {
    type: Array,
  },
  samba: {
    type: Array,
  },
  forro: {
    type: Array,
  },
  rock: {
    type: Array,
  },
  funk: {
    type: Array,
  },
  rap: {
    type: Array,
  },
  pagode: {
    type: Array,
  },
  frevo: {
    type: Array,
  },
  baiao: {
    type: Array,
  },
  piseiro: {
    type: Array,
  },
  maracatu: {
    type: Array,
  },
});

const Songs = mongoose.model("Songs", songsSchema);

module.exports = Songs;
