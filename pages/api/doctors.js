// pages/api/doctors.js

import db from '../../lib/sqlite';

export default function handler(req, res) {
  if (req.method === 'POST') {
    const { firstName, lastName, email, password, specialty } = req.body;
    const statement = db.prepare('INSERT INTO doctors (firstName, lastName, email, password, specialty) VALUES (?, ?, ?, ?, ?)');
    statement.run(firstName, lastName, email, password, specialty, function(err) {
      if (err) {
        res.status(500).json({ error: err.message });
      } else {
        res.status(201).json({ id: this.lastID });
      }
    });
  } else {
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
