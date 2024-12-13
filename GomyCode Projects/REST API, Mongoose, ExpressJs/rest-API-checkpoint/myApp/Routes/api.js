const express = require("express");
const router = express.Router();
const User = require("../Models/User");

router.post("/add", async (req, res) => {
    try {
        const newUser = new User(req.body);
        await newUser.save();
        return res.send(newUser + "Added");
    } catch (err) {
        res.json({ message: err });
    }
});
router.get("/", async (req, res) => {
    try {
        const data = await User.find();
        return res.send(data);
    } catch {
        res.json({ message: err });
    }
});
router.put("/:id", async (req, res) => {
    try {
        const data = await User.findOneAndUpdate(
            { _id: req.params.id },
            { FullName: "Hello im new" },
            { new: true }
        );
        return res.send(data);
    } catch {
        res.json({ message: err });
    }
});
router.delete("/:id", async (req, res) => {
    try {
        const data = await User.findOneAndRemove({ _id: req.params.id });
        return res.send(data + "removed");
    } catch {
        res.json({ message: err });
    }
});

module.exports = router;
