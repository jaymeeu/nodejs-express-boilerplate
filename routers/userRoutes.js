// const express = require('express');
import {Router} from "express";
import { getAllUsers, getUserById, saveUser } from "../controller/users.js";
import Auth from "../middlewares/auth.js";

const userRoutes = Router();

userRoutes.get('/', Auth, getAllUsers);
userRoutes.get('/:id', getUserById);
userRoutes.post('/', saveUser);

export default userRoutes


