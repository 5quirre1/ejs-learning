const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.set('views', './views');

app.get('/', (req, res) => {
  res.render('index', { name: 'greg' });
});

app.get('/greg', (req, res) => {
  res.render('greg');
});

app.listen(3000, () => console.log('server running on http://localhost:3000'));
