const router = require("express").Router();
let Assignment = require("../models/assignment.model");

router.route("/").get((req, res) => {
  Assignment.find()
    .then((assignments) => res.json(assignments))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/create").post((req, res) => {
  const subject = req.body.subject;
  const content = req.body.content;
  const note = req.body.note;
  const date = Date.parse(req.body.date);

  const newAssignment = new Assignment({
    subject,
    content,
    note,
    date,
  });

  newAssignment
    .save()
    .then(() => res.json("Assignment added!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/:id").get((req, res) => {
  Assignment.findById(req.params.id)
    .then((assignment) => res.json(assignment))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/:id").delete((req, res) => {
  Assignment.findByIdAndDelete(req.params.id)
    .then(() => res.json("Assignment deleted."))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/edit/:id").patch((req, res) => {
  Assignment.updateOne({ _id: req.params.id }, { $set: req.body }, (err) => {
    if (!err) {
      res.json("Successfully updated the selected assignment.");
    } else {
      res.status(400).json("Error: " + err);
    }
  });
});

module.exports = router;
