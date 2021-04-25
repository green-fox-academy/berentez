const express = require('express');
const mysql = require('mysql');
const app = express();
const path = require('path');

const PORT = 8080;

app.use(express.json());
app.use('/game', express.static('client/dist'));

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

//Return question with answers
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

//return all the questions
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

//post new question
app.post('/api/questions', (req, res) => {
  const { question } = req.body;
  conn.query('INSERT INTO quizapp.questions (question) VALUES (?)', [question], (err, result) => {
    if (err) {
      res.sendStatus(500);
      return;
    }
    const questionId = result.insertId;
    const answers = req.body.answers;

    conn.query(
      `INSERT INTO quizapp.answers (question_id, answer, is_correct) VALUES (?, ?, ?), (?, ?, ?), (?, ?, ?), (?, ?, ?)`,

      [
        questionId,
        answers[0].answer,
        answers[0].is_correct,
        questionId,
        answers[1].answer,
        answers[1].is_correct,
        questionId,
        answers[2].answer,
        answers[2].is_correct,
        questionId,
        answers[3].answer,
        answers[3].is_correct,
      ],
      (err, resultTwo) => {
        if (err) {
          res.sendStatus(500);
          return;
        }
        res.sendStatus(200);
      }
    );
  });
});

app.delete('/api/questions/:id', (req, res) => {
  const id = req.params.id;
  conn.query(`DELETE FROM quizapp.answers WHERE question_id = ?`, [id], (err, result) => {
    if (err) {
      res.sendStatus(500);
      return;
    }
    conn.query(`DELETE FROM quizapp.questions q WHERE q.id = ?`, [id], (err, resultTwo) => {
      if (err) {
        res.sendStatus(500);
        return;
      }
      res.sendStatus(200);
    });
  });
});

/////////////////////////////////////////////////////
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
