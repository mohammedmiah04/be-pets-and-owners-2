const express = require("express");
const app = express();
const fs = require("fs");
const { all } = require("proxy-addr");

app.get("/api/owners/:id", (req, res) => {
  console.log("Inside owners ID");
  const { id } = req.params;
  console.log(id);

  fs.readFile(`./data/owners/${id}.json`, "utf-8", (err, ownerData) => {
    if (err) console.log(err);
    else {
      const owner = JSON.parse(ownerData);
      res.status(200).send({ owner });
    }
  });
});

app.get("/api/owners", (req, res) => {
  fs.readdir("./data/owners", "utf-8", (err, allOwners) => {
    const arrayOfOwners = allOwners;
    const finalArray = [];
    arrayOfOwners.forEach((ownerFileName) => {
      fs.readFile(
        `./data/owners/${ownerFileName}`,
        "utf-8",
        (err, fileContents) => {
          if (err) console.log(err);
          const finalOwners = JSON.parse(fileContents);
          finalArray.push(finalOwners);
          if (finalArray.length >= allOwners.length) {
            res.status(200).send({ allOwners: finalArray });
          }
        }
      );
    });
  });
});

app.listen(9090, (err) => {
  if (err) console.log(err);
  else console.log("Listening ...");
});
