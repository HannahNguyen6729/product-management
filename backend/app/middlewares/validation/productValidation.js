const checkEmpty = (req, res, next) => {
  const { name, amount, price, sale } = req.body;
  if (name && amount && price && sale) {
    next();
  } else {
    res.status(500).send("all properties required");
  }
};

module.exports = { checkEmpty };
