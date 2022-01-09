const {
  fetchOwners,
  fetchAllOwners,
  changeOwner,
} = require("../models/fetchOwners.models");

const { deleteOwner } = require("../models/deleteOwner.model");

const { makeOwner } = require("../models/postOwner.model");

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
  console.log("inside of patch owner");
  const { id } = req.params;
  console.log(req.query);
  console.log(req.params);
  const { name, age } = req.query;
  changeOwner(id, name, age).then((update) => {
    res.status(201).send("Owner updated");
  });
};

exports.postOwner = (req, res) => {
  console.log("inside postOwner");
  console.log(req.body);
  const newOwner = req.body;
  makeOwner(newOwner).then(() => {
    return res.status(201).send("new owner created + file");
  });
};

exports.deleteOwner = (req, res) => {
  const { id } = req.params;
  console.log("in controller of delete");
  deleteOwner(id).then((deletionM) => {
    res.status(204).send(deletionM);
  });
};
