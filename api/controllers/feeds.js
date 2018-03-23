const express = require("express");
const router = express.Router();
const { poolQuery } = require("../helpers");
const { requireAuth } = require("../auth");

router.get("/", async (req, res) => {
  const rows = await poolQuery(`SELECT * FROM feeds ORDER BY id DESC`);
  res.send(rows);
});

router.post("/", requireAuth, async (req, res) => {
  const { user, body: { title, description } } = req;
  const query = `INSERT INTO feeds SET ?`;
  await poolQuery(query, { title, description, uploader: user.id });
  const rows = await poolQuery(`SELECT * FROM feeds ORDER BY id DESC`);
  res.send(rows);
});

module.exports = router;
