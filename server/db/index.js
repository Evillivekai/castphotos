require('dotenv').config();
const mongoose = require('mongoose');

mongoose.set('useCreateIndex', true);
mongoose.connect("mongodb://localhost/castphoto", { useNewUrlParser: true, useUnifiedTopology: true });

const MovieSchema = new mongoose.Schema({
  movieId: { type: Number, unique: true },
  movieName: String,
  casts: Array,
});

const MovieModel = mongoose.model('Movie', MovieSchema);

const getCasts = (movieId) => (
  MovieModel.find({ movieId }).exec()
);


module.exports = { getCasts, MovieModel };
