import { Router } from "express";

import { getAllProducts } from "../controller/GetAllProducts.js";
import { getSingleProduct } from "../controller/getSingleProduct.js";
import { deleteProduct } from "../controller/deleteProducts.js";
import { createNewProduct } from "../controller/createNewProduct.js";
import { updateProduct } from "../controller/updateProduct.js";

const router = Router()

router.get("/products", getAllProducts)
router.get("/products/:id", getSingleProduct)
router.post("/products" , createNewProduct)
router.put("/products/:id", updateProduct)
router.delete("/products/:id", deleteProduct)

export default router