import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from './config/db.js';
import authRoutes from "./routes/authRoutes.js";
import expenseRoutes from "./routes/expenseRoutes.js";

dotenv.config();
//connecting mongoDB
(async () => {
  await connectDB();
})();

const app = express();
app.use(cors());
app.use(express.json());
app.get("/",(req,res)=>{
    res.send("Server is runnning");
});

app.use("/api/auth", authRoutes);
app.use("/api/expenses", expenseRoutes);


const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
});