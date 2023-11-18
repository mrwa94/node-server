import { Router } from "express";

import { getAllProducts } from "../controller/GetAllProducts.js";
import { getSingleProduct } from "../controller/getSingleProduct.js";
import { deleteProduct } from "../controller/deleteProducts.js";
import { createNewProduct } from "../controller/createNewProduct.js";
import { updateProduct } from "../controller/updateProduct.js";
import { runValidation } from "../validator/runValidation.js";
import { productValidator } from "../validator/productValidator.js";

const router = Router()

router.get("/products", getAllProducts)
router.get("/products/:id", productValidator ,runValidation, getSingleProduct)
router.post("/products", createNewProduct)
router.put("/products/:id",productValidator, runValidation, updateProduct)
router.delete("/products/:id", deleteProduct)

export default router