const { getUserList } = require("../../../db/services/user.services");

export default async function handler(req, res) {
  if (req.method === "GET") {
    const users = await getUserList();
    if (users) res.status(200).json({ users });
    res.status(404).send("Not found!");
  }
}
