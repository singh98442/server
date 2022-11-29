import express from "express";
import { allblog } from "../controller/allblog.js";
import { postblog } from "../controller/allblog.js";
import { updateblog } from "../controller/allblog.js";
import { blogbyid } from "../controller/allblog.js";
import { deleteblog } from "../controller/allblog.js";
import { allblogsofuser } from "../controller/allblog.js";

const router = express.Router()

router.get('/blog', allblog)
router.post('/add/blog',postblog)
router.put(`/update/:id`,updateblog)
router.get('/:id',blogbyid)
router.delete('/delete/:id',deleteblog)
router.get('/user/:id',allblogsofuser)
export default router;