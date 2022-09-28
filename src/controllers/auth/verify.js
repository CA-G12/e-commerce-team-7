const verify = (req, res) => {
  res.status(200).json(req.user);
};

module.exports = verify;
