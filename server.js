import express from "express";
import rootRouter from "./src/routers/rooter.router";

const app = express();

app.use(express.json());
app.use("/api", rootRouter);

const port = 3333;

app.listen(port, () => {
  console.log(`Server is running on http://localhost${port}`);
});

//
