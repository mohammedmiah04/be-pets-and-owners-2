const fs = require("fs/promises");

exports.fetchPetsByOwner = (id) => {
  return fs
    .readdir("./data/pets", "utf-8")
    .then((fileContents) => {
      return fileContents;
    })
    .then((petsData) => {
      const petsPromises = petsData.map((pet) => {
        return fs.readFile(`./data/pets/${pet}`, "utf-8");
      });
      return Promise.all(petsPromises);
    })
    .then((petsDataArray) => {
      const parsedPets = petsDataArray.map((pet) => JSON.parse(pet));
      return parsedPets;
    })
    .then((parsed) => {
      const ownersPets = parsed.filter((pet) => {
        return pet.owner === id;
      });
      return ownersPets;
    });
};
