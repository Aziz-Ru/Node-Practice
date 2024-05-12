const express = require("express");
const router = express.Router();
const NoteModel = require("../model/noteSchema");

router.get("/", async (req, res) => {
  try {
    const notes = await NoteModel.find({});
    res.status(200).json({ notes: notes });
  } catch (error) {
    res.status(500).json({ msg: "Server side Error" });
  }
});
router.get("/active", async (req, res) => {
  try {
    const note = new NoteModel({});
    const data = await note.findActive();
    res.status(200).json({ data: data });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error });
  }
});
router.get("/query/:lang", async (req, res) => {
  try {
    const { lang } = req.params;
    console.log(lang);
    const data = await NoteModel.find().byLanguage(lang);
    res.status(200).json({ data: data });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error });
  }
});
router.get("/static/:item", async (req, res) => {
  try {
    const { item } = req.params;
    console.log(item);
    const data = await NoteModel.findByJs(item);
    res.status(200).json({ data: data });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    // console.log(id);
    const note = await NoteModel.findById({ _id: id });
    if (!note) {
      res.status(400).json({ message: "Not Found " });
      return;
    }
    res.status(200).json({ note: note });
  } catch (error) {
    res.status(400).json({ msg: "Id is not found" });
  }
});

router.post("/", async (req, res) => {
  try {
    // console.log(req.body);
    const newNote = new NoteModel(req.body);
    const savedNote = await newNote.save();
    // save is instance method
    res.status(200).json({
      msg: "Successfully inserted",
    });
  } catch (err) {
    res.status(500).json({
      errors: [err.errors.body, err.errors.status, err.errors.title],
    });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { title, body, status } = req.body;
    const updateNote = await NoteModel.findByIdAndUpdate(
      id,
      { title, body, status },
      { new: true }
    );
    res.status(200).json({ updateNote: updateNote });
  } catch (error) {
    res.status(400).json({ msg: "Cannot update data by ID" });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    // console.log(id);
    const deleteNote = await NoteModel.findByIdAndDelete(id);
    res.status(200).json({ message: "successfully deleted" });
  } catch (error) {}
});

module.exports = router;
