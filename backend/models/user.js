const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const moment = require("moment");

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  date: { type: Date, default: Date.now },
  dbStatus: Boolean,
});

// Esquema de seguridad encriptado para el momento en que nuestros usuarios estén logueados
userSchema.methods.generateJWT = function () {
  return jwt.sign(
    {
      _id: this._id,
      name: this.name,
      iat: moment().unix(), //issued at
    },
    process.env.SECRET_KEY_JWT
  );
};

const user = mongoose.model("user", userSchema);
module.exports = user;