import { Router } from "express";
import userRoutes from "./userRoutes.js";
import authRoutes from "./authRoutes.js";

const router = Router();

router.route('/').get( (req, res) => {
    res.status(201).json("Welcome!!!");
}) 

router.use('/users', userRoutes)
router.use('/auth', authRoutes)




export default router;