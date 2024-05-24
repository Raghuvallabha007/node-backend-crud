const express = require("express");
const mongoose = require("mongoose");
const productRoute = require("./routes/productRoute");
const imageRoute = require("./routes/imageRoute");
const app = express();

app.use(express.json());
app.get("/", (req, res) => {
  res.send("Hello World!!");
});

app.use('/api/products', productRoute);
app.use('/api/upload', imageRoute);

mongoose
  .connect(
    "mongodb+srv://raghuvallabha007:ipTkS9ftttFnHK4s@backenddb.zkmcm9x.mongodb.net/NODEAPI?retryWrites=true&w=majority&appName=BackendDB",
    { useUnifiedTopology: true }
  )
  .then((response) => {
    console.log("connected to DB");
    app.listen(3000, () => {
      console.log("Example app listening on port 3000!");
    });
  })
  .catch((err) => {
    console.log("error connecting", err);
  });
