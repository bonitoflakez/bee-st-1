import express from "express";
import movieRoutes from "./routes/route.js";

import { connect_db } from "./config/db.connection.js";

const app = express();
const port = 3001;

app.use(express.json());

app.use("/api", movieRoutes);

connect_db();

app.listen(port, () => {
  console.log(`Server up on -> http://localhost:${port}`);
});
