import express, { Response, Request } from "express";
import path from "path";

const app = express();

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, "/public/")));

// An api endpoint that returns a short list of items
app.get("/api/getList", (req: Request, res: Response) => {
  const list = ["item1", "item2", "item3"];
  res.json(list);
  console.log("Sent list of items");
});

app.get("/api", (req: Request, res: Response) => {
  res.send({ hello: "API!" });
});

app.post(
  "/api/emailsignup",
  (req: Request, res: Response) => {
    console.log(req.body);
  },
  (req, res) => {
    res.send("signed up!");
  }
);

// Handles any requests that don't match the ones above
app.get("*", (req: Request, res: Response) => {
  res.sendFile(path.join(__dirname + "/public/index.html"));
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log("App is listening on port " + port);
