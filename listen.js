const { app } = require("./app");

app.listen(6080, (err) => {
    if (err) throw new Error("sdsdsd");
    else console.log("Listening ...");
  })
  