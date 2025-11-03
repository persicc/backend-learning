import express from "express";
import { posts, users } from "./data.js";
import axios from "axios";
import dotenv from "dotenv";
import cors from "cors";
import { MovieService } from "./services/moviesService.js";

const movieService = new MovieService();

const app = express();
app.use(cors());
dotenv.config();

axios.defaults.headers.common[
  "Authorization"
] = `Bearer ${process.env.TMDB_TOKEN}`;

app.use(`${process.env.BASE_URL}/users`);

app.get("/", (req, res) => {
  res.send("Hello");
});

app.get("/users", (req, res) => {
  res.json(users);
});

app.get("/users/:id", (req, res) => {
  const { id } = req.params;
  const foundUser = users.find((user) => user.id == id);

  const cleandUpUser = {
    id: foundUser.id,
    name: foundUser.name,
  };
  res.json(cleandUpUser);
});

app.get("/posts/:id", (req, res) => {
  const { id } = req.params;
  const foundPost = posts.filter((post) => post.id == id);
  res.json(foundPost);
});

app.get("/movies/popular", async (req, res) => {
  const popularMovies = movieService.getPopular();

  res.json(popularMovies);
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
