const Express = require("express");
const router = Express.Router();
let validateJWT = require("../middleware/validate-jwt");
const { ChoreModel } = require("../models");

router.post("/", validateJWT, async (req, res) => {
  const { title, description, amount, deadline, assign, complete, owner_id } =
    req.body.chore;
  const { id } = req.user;
  const choreEntry = {
    title,
    description,
    amount,
    deadline,
    assign,
    complete,
    owner_id: id,
  };
  try {
    const newChore = await ChoreModel.create(choreEntry);
    res.status(200).json(newChore);
  } catch (err) {
    res.status(500).json({ error: err });
  }
});

router.put("/:choreId", validateJWT, async (req, res) => {
  const { description, title, amount, deadline, assign, complete, owner_id } =
    req.body.chore;
  const choreId = req.params.choreId;
  const userId = req.user.id;

  const query = {
    where: {
      id: userId,
      owner_id: userId,
    },
  };

  const updatedChore = {
    title,
    description,
    amount,
    deadline,
    assign,
    complete,
    owner_id,
  };

  try {
    const update = await ChoreModel.update(updateChore, query);
    res.status(200).json(update);
  } catch (err) {
    res.status(500).json({ error: err });
  }
});

router.delete("/:choreId", validateJWT, async (req, res) => {
  const userId = req.user.id;
  const choreId = req.params.choreId;

  try {
    const query = {
      where: {
        id: choreId,
        owner_id: userId,
      },
    };
    await ChoreModel.destroy(query);
    res.status(200).json({ message: "Chore was deleted" });
  } catch (err) {
    res.status(500).json({ error: err });
  }
});

module.exports = router;
