const express = require("express");
const app = express();

app.use(express.json());

const {
  getOwners,
  getAllOwners,
  patchOwner,
  postOwner,
} = require("./controllers/owners.controllers");

const { getOwnerPets } = require("./controllers/pets.controllers");

app.get("/api/owners/:id", getOwners);

app.get("/api/owners", getAllOwners);

app.get("/api/owners/:id/pets", getOwnerPets);

app.patch("/api/owners/:id", patchOwner);

app.post("/api/owners", postOwner);

module.exports = { app };
