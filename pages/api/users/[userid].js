const { getUserById } = require("../../../db/services/user.services");

export default async function handler(req, res) {
  const { userid } = req.query;
  const user = await getUserById(userid);

  if (user) res.status(200).json({ user });
  res.status(404).send("Not found!");
}
