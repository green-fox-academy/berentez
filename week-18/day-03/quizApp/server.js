const express = require('express');
const mysql = require('mysql');
const app = express();
const path = require('path');

const PORT = 8080;

app.use(express.json());

const conn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'fZn4g',
  database: 'quizapp',
});

conn.connect((err) => {
  if (err) {
    console.log(err.toString());
    return;
  }
  console.log('Connecting to database...success');
});

//////////////////////////////////////////////////////

app.get('/game', function (req, res) {
  res.sendFile(path.join(__dirname, '/client/dist/index.html'));
});

app.get('/questions', function (req, res) {
  res.sendFile(path.join(__dirname, '/client/dist/questions/questions.html'));
});

/////////////////////////////////////////////////////

//Return random question with answers
app.get('/api/game', function (req, res) {
  const questionId = req.headers.id;

  conn.query(
    `SELECT q.id, q.question, a.id answer_id, a.answer, a.is_correct 
    FROM quizapp.questions q INNER JOIN quizapp.answers a ON q.id = a.question_id WHERE q.id = ?`,
    [questionId],
    (err, result) => {
      if (err) {
        res.status(500).json({
          error: 'uhps something not right',
          message: err.message,
        });
        return;
      }

      const answers = result.map((value) => {
        const answer = {
          question_id: value.id,
          id: value.answer_id,
          answer: value.answer,
          is_correct: value.is_correct,
        };
        return answer;
      });

      let resBody = {
        id: result[0].id,
        question: result[0].question,
        answers: answers,
      };
      res.status(200);
      res.json(resBody);
    }
  );
});

app.get('/api/questions', (req, res) => {
  conn.query(`SELECT * FROM quizapp.questions`, (err, result) => {
    if (err) {
      res.status(500).json({
        error: err.message,
      });
      return;
    }

    res.status(200);
    res.json(result);
  });
});

/////////////////////////////////////////////////////
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
