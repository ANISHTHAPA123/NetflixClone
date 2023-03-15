const { model } = require("mongoose");
const { addToLikedMovies, getLikedMovies,removeFromLikedMovies } = require("../controllers/UserControllers")

const router=require("express").Router()


router.get("/liked/:email", getLikedMovies);
router.post("/add",addToLikedMovies);
router.post("/delete",removeFromLikedMovies);
module.exports=router;
