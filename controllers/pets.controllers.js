const { fetchPetsByOwner } = require("../models/fetchPets.models");

exports.getOwnerPets = (req, res) => {
  const { id } = req.params;

  fetchPetsByOwner(id).then((pets) => {
    res.status(200).send({ pets });
  });
};
