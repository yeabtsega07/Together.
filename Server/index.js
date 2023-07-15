const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello, World!');
  });

  const port = 3000; // Choose any port number you like
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
