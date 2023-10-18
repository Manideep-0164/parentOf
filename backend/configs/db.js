const mongoose = require("mongoose");

const connection = mongoose.connect(
  "mongodb+srv://manideep:manideep@cluster0.zo8bs.mongodb.net/parentOf?retryWrites=true&w=majority"
);

module.exports = {
  connection,
};
