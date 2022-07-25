import { Router } from "express";
import { createLink, getLink, getLinks, removeLink, updateLink } from "../controllers/link.controller.js";
import {requireToken} from "../middlewares/requireToken.js";
import { bodyLinkValidator, paramLinkValidator } from "../middlewares/validatorGenerate.js";
const router = Router();

//GET /api/v1/links ALL LINKS
//GET /api/v1/links/:id SINGLE LINK
//POST  /api/v1/links CREATE LINK
//PATCH/PUT /api/v1/links/:id UPDATE LINK
//DELETE /api/v1/links:id REMOVE

router.get("/",requireToken, getLinks)
router.get("/:id",requireToken, getLink)
router.post ("/", requireToken, bodyLinkValidator, createLink )
router.delete ("/:id", requireToken,paramLinkValidator,removeLink)
router.patch ("/:id", requireToken,paramLinkValidator, bodyLinkValidator, updateLink)

export default router;