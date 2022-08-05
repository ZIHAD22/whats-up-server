const User = require("../../models/User");

const allUser = async (req, res) => {
  const { email: loginUserEmail, searchKey } = req.query;

  const result = await User.find({}).sort({ _id: -1 });

  if (!result) {
    return res.json({ success: false, result: "Not Found" });
  }

  let filteredUser = result.filter((user) => user.email !== loginUserEmail);

  if (searchKey) {
    const searchResult = filteredUser.filter((user) =>
      user.name.toLowerCase().includes(searchKey)
    );

    return res.json({ success: true, result: searchResult });
  }

  console.log("all ok");
  res.json({ success: true, result: filteredUser });
};

module.exports = allUser;
