module.exports = (req, res) => {
  // const { author } = req.query
  res.status(200).json(user)
}

const user = {
  name: "Jitendra Nirnejak",
}
