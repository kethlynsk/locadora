import e from "express";
import movie_controller from "../controllers/movie-controller";

const router = e.Router()

router.post("/", movie_controller.store)
router.get("/", movie_controller.index)
router.get("/:id", movie_controller.show)
router.put("/:id", movie_controller.update)

export default router