const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
//
const cookieParser = require('cookie-parser');
const users = require('./routes/users');
const authRoutes = require('./routes/auth');
const auth = require('./middleware/auth');
const protectedRoutes = require('./routes/protectedRoutes');
// const auth = require('./routes/auth'); // Add this line
dotenv.config({ path: './.env' });
dotenv.config();

const app = express();
const port = process.env.PORT || 5501;

// Middleware
app.use(cors());
app.use(express.json());
//
app.use(cookieParser());

// MongoDB connection
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.error('Failed to connect to MongoDB', err);
  });

// Routes
app.get('/', (req, res) => {
  res.send('Hello World');
});

app.use('/api/users', users);
//
app.use('/api/auth', authRoutes);

//
// Protected Route Example
app.get('/api/protected', auth, (req, res) => {
    res.status(200).json({ message: 'This is a protected route' });
  });


  
// fetching login data
app.get('/api/user/profile', (req, res) => {
  // Fetch user data from the session or database
  const userData = {
      name: req.session.user.name,  // Example session fetch
      role: req.session.user.role
  };
  res.json(userData);
});



//Testing Server  
// app.get("/", (req, res) => {
//   return res.json({
//     success: true,
//     message: "Your server is up and running ...",
//   });
// });
// Start server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');
// const dotenv = require('dotenv');
// const users = require('./routes/users');
// const authRoutes = require('./routes/auth');
// const authorizedRoutes = require('./routes/authorizedRoutes');
// dotenv.config({ path: './.env' });

// const app = express();
// const port = process.env.PORT || 5500;

// // Middleware
// app.use(cors());
// app.use(express.json());

// // MongoDB connection
// mongoose.connect(process.env.MONGODB_URI, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// })
//   .then(() => {
//     console.log('Connected to MongoDB');
//   })
//   .catch((err) => {
//     console.error('Failed to connect to MongoDB', err);
//   });

// // Routes
// app.get('/', (req, res) => {
//   res.send('Hello World');
// });

// app.use('/api/users', users);
// app.use('/api/auth', authRoutes);
// app.use('/api/authorized', authorizedRoutes);

// // Start server
// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });

