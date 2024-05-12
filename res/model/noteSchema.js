const mongoose = require("mongoose");

const noteSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  body: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    enum: ["active", "inactive"],
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

// instance method
noteSchema.methods.findActive = function () {
  return mongoose.model("Notemodel").find({ status: "active" });
};

//static method
noteSchema.statics = {
  findByJs: function (item) {
    return this.find({ title: new RegExp(item, "i") });
  },
};

//query helper

noteSchema.query = {
  byLanguage(language) {
    return this.find({ title: new RegExp(language, "i") });
  },
};

const note = mongoose.model("Notemodel", noteSchema);
// this model is document

module.exports = note;
