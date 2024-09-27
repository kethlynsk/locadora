import express from "express";
import director_controler from "../controllers/director-controller.js";
// import via_cep from "../middleware/via_cep.js";

const router = express.Router()

router.get("/", director_controler.index)
router.post("/",director_controler.store)
router.get("/:id", director_controler.show)
router.put("/:id", director_controler.update)

export default router