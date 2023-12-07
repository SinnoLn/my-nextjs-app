const sqlite3 = require('sqlite3').verbose();
const path = require('path');

// 데이터베이스 파일의 경로를 정의합니다.
// process.cwd()는 현재 작업 디렉토리를 반환합니다.
const dbPath = path.resolve(process.cwd(), 'mydb.sqlite3');

// 새 sqlite3 데이터베이스를 열거나, 없으면 생성합니다.
const db = new sqlite3.Database(dbPath, sqlite3.OPEN_READWRITE | sqlite3.OPEN_CREATE, (err) => {
  if (err) {
    console.error(err.message);
    throw err;
  }
  console.log('Connected to the SQLite database.');
});

// 데이터베이스 초기화 코드 (예: 테이블 생성)
const initDb = () => {
  db.serialize(() => {
    db.run(`
      CREATE TABLE IF NOT EXISTS patients (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        firstName TEXT,
        lastName TEXT,
        email TEXT UNIQUE,
        message TEXT,
        password TEXT
      )
    `, (err) => {
      if (err) {
        console.error(err.message);
      } else {
        console.log('Patients table created or already exists.');
      }
    });
  });
};

// 데이터베이스 초기화 함수를 실행합니다.
initDb();

// db 객체를 내보냅니다. 이 객체를 통해 데이터베이스 연결을 관리합니다.
module.exports = db;
