const express = require('express');
const router = express.Router();
const User = require('../models/User');
const jwt = require('jsonwebtoken');


// Register route
router.post('/register', async (req, res) => {
  try {
    const { name, email, password,role } = req.body;
    const newUser = new User({ name, email, password,role });
    await newUser.save();
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
  
});

// Login route
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email, password });
    if (user) {
      res.status(200).json(user);
    } else {
      res.status(400).json({ error: 'Invalid credentials' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;

// const jwt = require('jsonwebtoken');

// module.exports = (req, res, next) => {
//   const token = req.header('Authorization');

//   if (!token) {
//     return res.status(401).json({ message: "No token, authorization denied" });
//   }

//   try {
//     const decoded = jwt.verify(token, process.env.JWT_SECRET);
//     req.user = decoded;
//     next();
//   } catch (error) {
//     res.status(401).json({ message: "Token is not valid" });
//   }
// };



// const express = require('express');
// const router = express.Router();
// const jwt = require('jsonwebtoken');
// const bcrypt = require('bcryptjs');
// const User = require('../models/User');

// // Register route
// router.post('/register', async (req, res) => {
//   try {
//     const { name, email, password } = req.body;
//     const salt = await bcrypt.genSalt(10);
//     const hashedPassword = await bcrypt.hash(password, salt);

//     const newUser = new User({ name, email, password: hashedPassword });
//     await newUser.save();

//     const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

//     res.cookie('token', token, { httpOnly: true }).status(201).json({ message: 'User registered successfully' });
//   } catch (error) {
//     res.status(500).json({ error: 'Server error' });
//   }
// });

// // Login route
// router.post('/login', async (req, res) => {
//   try {
//     const { email, password } = req.body;
//     const user = await User.findOne({ email });

//     if (!user) {
//       return res.status(400).json({ error: 'Invalid credentials' });
//     }

//     const isMatch = await bcrypt.compare(password, user.password);

//     if (!isMatch) {
//       return res.status(400).json({ error: 'Invalid credentials' });
//     }

//     const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

//     res.cookie('token', token, { httpOnly: true }).status(200).json({ message: 'Login successful' });
//   } catch (error) {
//     res.status(500).json({ error: 'Server error' });
//   }
// });

// module.exports = router;

// const jwt = require('jsonwebtoken');

// const auth = (req, res, next) => {
//   const token = req.header('Authorization');

//   if (!token) {
//     return res.status(401).json({ message: "No token, authorization denied" });
//   }

//   try {
//     const decoded = jwt.verify(token, process.env.JWT_SECRET);
//     req.user = decoded;
//     next();
//   } catch (error) {
//     res.status(401).json({ message: "Token is not valid" });
//   }
// };

// module.exports = auth;

