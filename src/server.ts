import express, { Response, Request } from "express";
import path from "path";
//import mailchimp from "@mailchimp/mailchimp_marketing";

const app = express();

/*mailchimp.setConfig({
  accessToken: "YOUR_ACCESS_TOKEN",
  server: "YOUR_SERVER_PREFIX",
});

const listId = "";
async function sendEmailToMailchimp(email: string): Promise<any> {
  return mailchimp.lists.addListMember(listId, {
    email_address: email,
    status: "subscribed",
  });
} */

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

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

app.post("/api/emailsignup", async (req: Request, res: Response) => {
  console.log(req.body.email);
  //const response = await sendEmailToMailchimp(req.body.email);
  res.send("signed up!");
});

// Handles any requests that don't match the ones above
app.get("*", (req: Request, res: Response) => {
  res.sendFile(path.join(__dirname + "/public/index.html"));
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log("App is listening on port " + port);
