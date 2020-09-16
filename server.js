const express = require('express');

const app = express();

app.get('/api/breeds', (req, res) => {
  const breeds = [
    {id: 1, name: 'husky'},
    {id: 2, name: 'akita'},
    {id: 3, name: 'pitbull'},
    {id: 4, name: 'jb'}
  ];

  res.json(breeds);
});

const port = 5000;

app.listen(port, () => `Server running on port ${port}`);