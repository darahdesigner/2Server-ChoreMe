const Express = require("express");
const router = Express.Router();
const { ChoreModel } = require("../models");

router.put("/:choreId", async (req, res) => {
  const { description, title, amount, deadline, assign, complete } =
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
    title: title,
    description: description,
    amount: amount,
    deadline: deadline,
    assign: assign,
    complete: complete,
  };

  try {
    const update = await ChoreModel.update(updateChore, query);
    res.status(200).json(update);
  } catch (err) {
    res.status(500).json({ error: err });
  }
});

router.delete("/:choreId", async (req, res) => {
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