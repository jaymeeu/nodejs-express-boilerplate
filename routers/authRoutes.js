// const express = require('express');
import {Router} from "express";
import { loginUser } from "../controller/auth.js";
import { validateRequest } from "../utils/validateRequest.js";
import { loginSchema } from "../validations/user.schema.js";

const authRoutes = Router();

authRoutes.post('/login', validateRequest(loginSchema), loginUser);

export default authRoutes


