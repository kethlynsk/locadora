import e from "express";
import user_controller from "../controllers/user-controller";

const router = e.Router()

router.get("/", user_controller.index)
router.get("/:id", user_controller.show)
router.post("/auth/register", user_controller.store)
router.put("/:id", user_controller.update)

export default router