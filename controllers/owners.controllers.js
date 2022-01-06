const {
  fetchOwners,
  fetchAllOwners,
  changeOwner,
} = require("../models/fetchOwners.models");

exports.getOwners = (req, res) => {
  const { id } = req.params;

  fetchOwners(id)
    .then((owner) => {
      res.status(200).send({ owner });
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.getAllOwners = (req, res) => {
  fetchAllOwners().then((allOwners) => {
    res.status(200).send({ allOwners });
  });
};

exports.patchOwner = (req, res) => {
  const { id } = req.params;
  console.log(req.query);
  console.log(req.params);
  const { name, age } = req.query;
  changeOwner(id, name, age);
};
