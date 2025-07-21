const express = require('express');
const app = express();
const PORT = 3000;

const items = Array.from({ length: 50 }, (_, i) => `thing ${i + 1}`);
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const perPage = 5;
  const start = (page - 1) * perPage;
  const end = start + perPage;

  const paginatedItems = items.slice(start, end);
  const totalPages = Math.ceil(items.length / perPage);

  res.render('index', {
    items: paginatedItems,
    currentPage: page,
    totalPages
  });
});

app.listen(PORT, () => {
  console.log(`server is running at http://localhost:${PORT}`);
});
