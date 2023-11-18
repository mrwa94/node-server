import express, { urlencoded } from "express";
import morgan from "morgan";
import { rateLimit } from 'express-rate-limit'
import 'dotenv/config'
import router from "./back-end/routes/ProductRoute.js";
import cors from 'cors';

const app = express()
const port = 8080;

app.use(express.json())
app.use(cors());
app.use(urlencoded({ extended: true }))
app.use(morgan('dev'))
app.use(router)


const limiter = rateLimit({
    windowMs: 1 * 60 * 1000,
    limit: 100,
    message: "you reach to limited request "

})
app.use(limiter)

app.get("/", (req, res) => {
    res.send("route  is running");
});

app.use((req, res, next) => {
    res.status(404).json({
        message: "route is not found !"
    })
})
app.listen(port, () => {
    console.log(`server is running at http://localhost:${port}`)
});

export default app;