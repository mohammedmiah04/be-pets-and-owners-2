const fs = require("fs/promises");

exports.deleteOwner = (id) => {
  console.log("in delete owner");
  console.log(id);
  // read all owners -> parse -> filter -> delete
  return fs
    .readdir("./data/owners", "utf-8")
    .then((arr) => {
      console.log(arr);
      console.log(typeof id);
      console.log(id[1]);
      console.log(arr);
      const delFile = arr.filter((file) => {
        if (file.split("")[1] === id[1]) {
          console.log(file, "<--");
          return file;
        }
      });
      return delFile;
    })
    .then((chosenFile) => {
      console.log(chosenFile);
      return fs.unlink(`./data/owners/${chosenFile[0]}`);
    })
    .then((final) => {
      return;
    });
};
