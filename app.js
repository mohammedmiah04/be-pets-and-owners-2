const express = require("express");
const app = express();
const fs = require("fs");
const {
  getOwners,
  getAllOwners,
  patchOwner,
} = require("./controllers/owners.controllers");
const { getOwnerPets } = require("./controllers/pets.controllers");

app.get("/api/owners/:id", getOwners);

app.get("/api/owners", getAllOwners);

app.get("/api/owners/:id/pets", getOwnerPets);

app.patch("/api/owners/:id", patchOwner);

module.exports = { app };
aa