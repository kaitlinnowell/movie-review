const { Schema } = require("mongoose");

const movieSchema = new Schema({
  movieId: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  image: {
    type: String,
  },
  directors: [
    {
      type: String,
    },
  ],
  review: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
    min: 0, // Minimum value for rating
    max: 10, // Maximum value for rating
  },
  favorite: {
    type: Boolean,
    required: false,
  },
});

module.exports = movieSchema;
