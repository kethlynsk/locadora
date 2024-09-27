import e from "express";
import producer_controller from "../controllers/producer-controller";

const router = e.Router()

router.post("/", producer_controller.store)
router.get("/", producer_controller.index)
router.get("/:id", producer_controller.show)
router.put("/:id", producer_controller.update)

export default router