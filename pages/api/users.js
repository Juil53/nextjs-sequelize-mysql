// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const db = require('../../models/index');
const Users = db.user;

export default async function handler(req, res) {
  const users = await Users.findAll();
  res.status(200).json({result: users});
}
