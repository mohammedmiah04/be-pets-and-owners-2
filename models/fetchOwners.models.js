const fs = require("fs/promises");

exports.fetchOwners = (id) => {
  return fs.readFile(`./data/owners/${id}.json`, "utf-8").then((data) => {
    const owner = JSON.parse(data);
    return owner;
  });
};

exports.fetchAllOwners = () => {
  return fs
    .readdir("./data/owners", "utf-8")
    .then((arrayOfOwners) => {
      return arrayOfOwners;
    })
    .then((array) => {
      const ownerPromises = array.map((owner) => {
        return fs.readFile(`./data/owners/${owner}`, "utf-8");
      });
      return Promise.all(ownerPromises);
    })
    .then((values) => {
      const parsedArray = values.map((ownerParsed) => {
        return JSON.parse(ownerParsed);
      });
      console.log(parsedArray);
      return parsedArray;
    });
};

exports.changeOwner = (id, name, age) => {
  console.log(id);
  return fs
    .readFile(`./data/owners/${id}.json`, "utf-8")
    .then((data) => {
      const pOwner = JSON.parse(data);
      console.log(pOwner, "this1");
      return pOwner;
    })
    .then((owner) => {
      owner.age = age;
      owner.name = name;
      console.log(owner);
      return owner;
    })
    .then((owner) => {
      const ownerData = owner;
      console.log(ownerData, "<-- this");
      return fs
        .writeFile(
          `./data/owners/${id}.json`,
          JSON.stringify(ownerData, null, 4)
        )
        .then((updatedOwner) => {
          return;
        });
    });
};
