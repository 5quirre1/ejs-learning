const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3000;

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

let todos = [];
app.get('/', (req, res) => {
  res.render('index', { todos });
});

app.post('/add', (req, res) => {
  const { task } = req.body;
  if (task.trim() !== '') {
    const id = Date.now().toString();
    todos.push({ id, task });
  }
  res.redirect('/');
});

app.post('/delete', (req, res) => {
  const { id } = req.body;
  todos = todos.filter(todo => todo.id !== id);
  res.redirect('/');
});

app.listen(PORT, () => console.log(`running at http://localhost:${PORT}`));
