const express = require("express");
const app = express();

app.get("/", function (request, response){
     response.sendFile(__dirname+"/webpage.html");
 });

const port = process.env.PORT || 9001;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});