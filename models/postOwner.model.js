const fs = require("fs/promises");

//get filenames -> read them -> resolve them -> parse results -> push them in array --> push body in same array --> loop and make each file with fs.write

exports.makeOwner = (newOwner) => {
  console.log("inside of makeOwner model");
  console.log(newOwner);
  return fs
    .readdir("./data/owners", "utf-8")
    .then((fileArray) => {
      console.log(fileArray);
      return fileArray;
    })
    .then((fileNames) => {
      console.log(fileNames);
      const filesData = fileNames.map((file) => {
        return fs.readFile(`./data/owners/${file}`, "utf-8");
      });
      return Promise.all(filesData);
    })
    .then((filesData) => {
      console.log(filesData);
      const pData = filesData.map((file) => JSON.parse(file));
      console.log(pData);
      let finalArr = [...pData, newOwner].flat();
      console.log(finalArr);
      return finalArr;
    })
    .then((allFiles) => {
      console.log(allFiles);
      const writeOwners = allFiles.map((owner) => {
        return fs.writeFile(
          `./data/owners/${owner.id}.json`,
          JSON.stringify(owner, null, 4)
        );
      });
      console.log(writeOwners);
      return Promise.all(writeOwners);
    })
    .then((promises) => {
      console.log(promises);
    });
};
