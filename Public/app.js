const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000; // You can use any port you prefer

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Mock user data (This should be replaced with an actual user database)
const users = [
  { username: 'user1', password: 'password1' },
  { username: 'user2', password: 'password2' },
];

// Login endpoint
app.post('/login', (req, res) => {
  const { username, password } = req.body;
  const user = users.find((user) => user.username === username && user.password === password);
  if (user) {
    res.status(200).json({ message: 'Login successful!', user });
  } else {
    res.status(401).json({ message: 'Invalid credentials' });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
