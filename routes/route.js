import express from "express"
import { signup } from "../controller/signup.js"
import { signupall } from "../controller/signupall.js"
import { loginall } from "../controller/login.js"


const router = express.Router()

router.get('/signup',signup)
router.post('/signupuser',signupall)
router.post('/login',loginall)

export default router;