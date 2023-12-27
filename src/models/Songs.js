const mongoose = require("mongoose");

const songsSchema = new mongoose.Schema({
  sertanejo: Array,
  mpb: Array,
  bossa_nova: Array,
  samba: Array,
  forro: Array,
  rock: Array,
  funk: Array,
  rap: Array,
  pagode: Array,
  piseiro: Array,
  pop: Array,
});

const Songs = mongoose.model("Songs", songsSchema);

module.exports = Songs;
