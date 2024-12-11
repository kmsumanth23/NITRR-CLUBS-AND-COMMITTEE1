const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');

// Example protected route
router.get('/protected', auth, (req, res) => {
  res.status(200).json({ message: "You have accessed a protected route", user: req.user });
});

module.exports = router;
