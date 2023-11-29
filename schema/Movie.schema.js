import mongoose from "mongoose";
import { reviewSchema } from "./Review.schema.js";

const movieSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    maxlength: 255,
  },
  description: {
    type: String,
    required: true,
    maxlength: 1000,
  },
  genre: {
    type: String,
    required: true,
  },
  releaseYear: {
    type: Number,
    required: true,
    min: 1800,
    max: new Date().getFullYear(),
  },
  reviews: [reviewSchema],
});

const Movie = mongoose.model("Movie", movieSchema);

export { Movie };
