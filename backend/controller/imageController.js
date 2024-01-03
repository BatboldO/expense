const { sql } = require("../config/pgDb");

const upload = async (req, res) => {
  console.log("IMAGE", req.file);
  const { userId } = req.params;
  // const image = req.file;

  await sql`UPDATE users SET avatar_img=${req.file.path} WHERE id=${userId}`;
  // const datas = await sql`SELECT * FROM users`;

  res.status(201).json({ message: "success", imageUrl: req.file.path });
};

module.exports = { upload };
