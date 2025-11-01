import { Router } from "express/router";
import { MovieController } from "../controllers/MovieController";

const router = Router();
const movieController = new MovieController();

router.get("/", movieController.getPopular);
