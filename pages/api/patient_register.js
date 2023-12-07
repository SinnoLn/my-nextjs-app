import db from '../../lib/sqlite';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    // 요청 본문에서 사용자 정보를 추출합니다.
    const { firstName, lastName, email, message, password } = req.body;

    // 먼저, 같은 이메일을 가진 사용자가 있는지 확인합니다.
    db.get('SELECT email FROM patients WHERE email = ?', [email], (err, row) => {
      if (err) {
        // 데이터베이스 조회 중 오류가 발생한 경우
        res.status(500).json({ error: err.message });
        return;
      }

      if (row) {
        // 이미 존재하는 이메일이 있는 경우
        res.status(409).json({ error: 'UserExists' });
      } else {
        // 새 사용자를 데이터베이스에 추가합니다.
        const insert = db.prepare('INSERT INTO patients (firstName, lastName, email, message, password) VALUES (?, ?, ?, ?, ?)');
        insert.run([firstName, lastName, email, message, password], function(insertErr) {
          if (insertErr) {
            res.status(500).json({ error: insertErr.message });
          } else {
            // 성공적으로 추가된 경우
            res.status(201).json({ id: this.lastID });
          }
        });
      }
    });
  } else {
    // POST 메소드가 아닌 경우의 처리
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}