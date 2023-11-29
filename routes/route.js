import express from "express";
import { Movie } from "../schema/Movie.schema.js";

const router = express.Router();

// movie routes
router.post("/movies", async (req, res) => {
  try {
    const movieData = req.body;

    if (
      !movieData.title ||
      !movieData.description ||
      !movieData.genre ||
      !movieData.releaseYear
    ) {
      return res.status(400).json({
        message: "ALl fields required",
      });
    }

    const result = await new Movie({ movieData });

    if (!result) {
      return res.status(400).json({
        message: "Unable to add movie",
      });
    }

    return res.status(200).json({
      message: "Movie added successfully",
      data: movieData,
    });
  } catch (error) {
    console.error("Error while adding a movie:", error);
  }
});
router.get("/movies", async (req, res) => {
  const result = await new Movie.find({});

  if (!result) {
    return (
      res.status(400),
      json({
        message: "Cloudn't fetch movies",
      })
    );
  }

  return res.status(200).json({
    result,
  });
});
// router.get("/movies/:movieId");
// router.put("/movies/:movieId");
// router.delete("/movies/:movieId");

// // review routes
// router.post("/movies/:movieId/reviews");
// router.get("/movies/:movieId/reviews");
// router.put("/movies/:movieId/reviews/:reviewId");
// router.delete("/movies/:movieId/reviews/:reviewId");

export default router;
