import { Router } from "express";
const router = Router();

import { getAllUsers } from "../controller/users.js";
import { saveUser } from "../controller/users.js";
import userRoutes from "./userRoutes.js";

/** POST Methods */
// router.route('/products').post(getAllProducts); // register user

/** GET Methods */
router.route('/').get( (req, res) => {
    res.status(201).json("Welcome!!!");
}) //

router.use('/users', userRoutes)

/** PUT Methods */
// router.route('/updateuser').put(Auth, controller.updateUser); // is use to update the user profile



export default router;