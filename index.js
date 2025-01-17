import express from "express";
import userRouters from "./routes/userRoutes.js";
import postRouters from "./routes/postRoutes.js";
import commentRouters from "./routes/commentRoutes.js";

const app = express();

app.use("/users", userRouters);
app.use("/posts", postRouters);
app.use("/comment", commentRouters);

app.listen(3000, () => {
  console.log("server is running...");
});
