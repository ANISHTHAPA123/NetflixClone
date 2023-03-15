const express= require("express")
const mongoose=require("mongoose");
const cors = require("cors");
const userRoutes=require("./routes/UserRoutes")
const app=express();
app.use(cors());
app.use(express.json());
mongoose.connect("mongodb://localhost:27017/netflix",{
    useNewUrlParser:true,
    useUnifiedTopology:true,
})
.then(()=>{console.log("Db Connected");
});
 app.use("/api/user",userRoutes);
app.listen(5000,console.log("server started"))