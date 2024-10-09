// const express = require('express');
import {Router} from "express";
import { getAllProducts } from "../controller/products.js";

const router = Router();

router.get('/', async (req, res) => {
  const products = await getAllProducts();
  res.send({ status: 'OK', data: products });
});

export default router