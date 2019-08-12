const express = require("express");
const router = express.Router();

// user Model
const User = require("../../models/User");

//@route Get api/user
//@desc  get all User
//@access Public
router.get("/", (req, res) => {
  User.find()
    .sort({ name: 1 })
    .then(user => res.json(user));
});
//@route POST api/user
//@desc  create User
//@access Public

router.post("/", (req, res) => {
  const newUser = new User({
    name: req.body.name
  });

  newUser.save().then(user => res.json(user));
});

//@route Delete api/user
//@desc  delete User
//@access Public

router.delete("/:id", (req, res) => {
  User.findById(req.params.id)
    .then(user => user.remove().then(() => res.json({ success: true })))
    .catch(err => res.status(404).json({ success: false }));
});

module.exports = router;
