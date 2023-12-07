// pages/api/login.js
import db from '../../lib/sqlite'; // Assuming this correctly sets up and exports the database connection

export default function handler(req, res) {
  if (req.method !== 'POST') {
    // Handle non-POST requests immediately
    res.status(405).json({ error: `Method ${req.method} Not Allowed` });
    return;
  }

  const { email, password } = req.body;

  // Ensure email and password are not empty
  if (!email || !password) {
    res.status(400).json({ error: 'Email and password are required' });
    return;
  }

  // Replace the plain text password check with a hashed password check in a real application
  db.get('SELECT * FROM patients WHERE email = ? AND password = ?', [email, password], (err, row) => {
    if (err) {
      // Log the error for debugging purposes
      console.error(err.message);
      res.status(500).json({ error: 'Internal Server Error' });
      return;
    }
    if (row) {
      // Login successful
      res.status(200).json({ message: "Login successful", patient: row });
    } else {
      // Login failed
      res.status(401).json({ message: "Invalid email or password" });
    }
  });
}
