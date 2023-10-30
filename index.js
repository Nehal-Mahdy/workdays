import express from "express";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  const today = new Date();
  const day = today.getDay();
//   console.log(day);
  let type = "a weekday";
  let adv = "it is time to work hard";

  if(day === 0 || day === 6){
    type = "the weekend";
    adv = "it is time to have some fun";
  }


  res.render("index.ejs", {
    dayType: type,
    advice:  adv,
  });
});

app.listen(port, function () {
  console.log(`listening to port ${port}`);
});
