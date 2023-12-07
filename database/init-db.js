const sqlite3 = require('sqlite3').verbose();
const path = require('path');

// Resolve the path to the database file
const dbPath = path.resolve(process.cwd(), 'mydb.sqlite3');

// Create a new database instance
const db = new sqlite3.Database(dbPath, sqlite3.OPEN_READWRITE | sqlite3.OPEN_CREATE, (err) => {
  if (err) {
    console.error('Cannot open database', err.message);
    throw err;
  }
  console.log('Connected to the SQLite database.');

  // Create the 'patients' table if it does not exist
  db.run(`CREATE TABLE IF NOT EXISTS patients (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    firstName TEXT,
    lastName TEXT,
    email TEXT UNIQUE,
    message TEXT,
    password TEXT
  )`, (err) => {
    if (err) {
      console.error('Error creating patients table', err.message);
    } else {
      console.log('Patients table created or already exists.');
      // Optionally insert default users here
    }
  });

  // Create the 'doctors' table if it does not exist
  db.run(`CREATE TABLE IF NOT EXISTS doctors (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    firstName TEXT,
    lastName TEXT,
    email TEXT UNIQUE,
    password TEXT,
    specialty TEXT
  )`, (err) => {
    if (err) {
      console.error('Error creating doctors table', err.message);
    } else {
      console.log('Doctors table created or already exists.');
      // Optionally insert default doctors here
    }
  });
});

// Export the database instance for other modules to use
module.exports = db;
