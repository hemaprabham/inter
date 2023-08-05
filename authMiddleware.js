// authMiddleware.js
const jwt = require('jsonwebtoken');

// Sample user data (replace with your actual user data)
const users = [
  {
    id: 1,
    username: 'user1',
    password: 'password1',
  },
  {
    id: 2,
    username: 'user2',
    password: 'password2',
  },
];

// Middleware to authenticate the Bearer token
const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (token == null) {
    return res.sendStatus(401);
  }

  jwt.verify(token, 'your-secret-key', (err, user) => {
    if (err) {
      return res.sendStatus(403);
    }

    // Check if the user exists (replace this with your actual user validation logic)
    const foundUser = users.find((u) => u.id === user.userId);
    if (!foundUser) {
      return res.sendStatus(403);
    }

    req.user = user;
    next();
  });
};

module.exports = {
  authenticateToken,
};
app.use(cors({
  origin: 'http://your-frontend-domain.com' // Replace with your frontend domain
}));